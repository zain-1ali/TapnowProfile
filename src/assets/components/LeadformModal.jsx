import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import {MdKeyboardArrowUp,MdKeyboardArrowDown} from 'react-icons/md'
import {push, ref, update} from 'firebase/database'
import { getDownloadURL, uploadBytes ,ref as sRef } from 'firebase/storage'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { db, storage } from '../../Firebase'


const LeadformModal = ({modal,handleModal,userdata}) => {


    const style2 = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 330,
        height: 540,
        bgcolor: "white",
        // border: '2px solid #000',
        boxShadow: 24,
        border:'none',
        outline:'none',
        borderRadius:'18px'
        // p: "32px",
      };



      let [showExtra,setshowExtra]=useState(false)

      let toggleShowExtra=()=>{
        setshowExtra(!showExtra)
      }

  let [data,setData]=useState({
    name:'',
    email:'',
    phone:'',
    job:'',
    company:'',
    message:''
  })

let [img,setimg]=useState('')

const handleImageChange = (e) => {

  if (e.target.files[0]) {
      setimg(e.target.files[0])

  }
}




// Get the current date
const currentDate = new Date();

// Function to get the abbreviated month name
function getMonthAbbreviation(date) {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return monthNames[date.getMonth()];
}

// Function to add leading zero to single-digit day
function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

// Extract day, month, and year
const day = addLeadingZero(currentDate.getDate());
const month = getMonthAbbreviation(currentDate);
const year = currentDate.getFullYear();

// Format the date string
const formattedDate = `${month} ${day},${year}`;





const addData = async () => {
  if (data.name || data.company || data.email || data.message || data.job || data.phone) {
      let pushKey=push(ref(db, `User/${userdata?.id}/contactRequests`), {...data,connectedWith:{name:userdata?.name,img:userdata?.profileUrl,id:userdata?.id},date:formattedDate}).key
      update(ref(db, `User/${userdata?.id}/contactRequests/${pushKey}`), {id:pushKey}).then(()=>{
        update(ref(db, `User/${userdata?.id}/Analytics`),{tContactsMeCrntWk:userdata?.Analytics?.tContactsMeCrntWk+1})
        toast.success('Information submited successfuly')
        setData({
          name:'',
          email:'',
          phone:'',
          job:'',
          company:'',
          message:''
        })
      });
      if (img) {
          let name = new Date().getTime() + img.name;
          const storageRef = sRef(storage, name);
          uploadBytes(storageRef, img).then(() => {
              console.log('img testing')
              getDownloadURL(storageRef).then((URL) => {
                  console.log(URL)
                  update(ref(db, `User/${userdata?.id}/contactRequests/${pushKey}`), { imgUrl: URL }).then(()=>{
                    setimg(null)

                  });
                 

              }).catch((error) => {
                  console.log(error)
              });
          }).catch((error) => {
              console.log(error)
          })
      }
  }
  else{
    toast.error('Name field should not be empty')

  }
} 

  return (
    <div>
    <Modal
    open={modal}
    onClose={() =>handleModal() }
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >

    <Box 
     sx={style2}>
       <div className='h-[100%] w-[100%] overflow-y-scroll scrollbar-hide flex flex-col items-center pb-2'>
<div className='w-[100%] mt-4 flex justify-center '>
    <h2 className='w-[85%] text-center text-lg font-medium '>{userdata?.formHeader}</h2>
    </div>

    <div class="w-[90%]  mt-[15px] bg-white ">
            {/* <h2 class="font-medium text-lg">Contact me</h2> */}

            <img
            src={img ? URL.createObjectURL(img) : `https://placehold.co/85x85`}
              alt=""
              class="h-[85px] w-[85px] rounded-full object-cover "
            />
            <label for="img">
              <div class="w-[93px] h-[26px] bg-black text-white mt-2 rounded-xl text-sm flex justify-center items-center cursor-pointer">
                Add image
              </div>
              <input
                type="file"
                name="img"
                id="img"
                class="opacity-0 w-[0px] h-[0px]"
                onChange={handleImageChange}
              />
            </label>
            {
              userdata?.leadForm?.Fname &&
          
            <div class="mt-2">
              {/* <p class="ml-2">Name*</p> */}
              <input
                type="text"
                placeholder="Enter Name"
                class="outline-none p-2 w-[100%]  border rounded-3xl mt-[2px]"
                onChange={(e)=>setData({...data,name:e.target.value})}
                value={data.name}
              />
            </div>
              }

{
              userdata?.leadForm?.email &&
            <div class="mt-2">
              {/* <p class="ml-2">Email*</p> */}
              <input
                type="text"
                placeholder="Enter Email"
                class="outline-none p-2 w-[100%]  border rounded-3xl mt-[2px]"
                onChange={(e)=>setData({...data,email:e.target.value})}
                value={data.email}
              />
            </div>
}

{
              userdata?.leadForm?.phone &&
            <div class="mt-2">
              {/* <p class="ml-2">Phone Number*</p> */}
              <input
                type="text"
                placeholder="Enter Phone"
                class="outline-none p-2 w-[100%]  border rounded-3xl mt-[2px]"
                onChange={(e)=>setData({...data,phone:e.target.value})}
                value={data.phone}
              />
            </div>
}

{
   
      userdata?.leadForm?.job || userdata?.leadForm?.note || userdata?.leadForm?.company ?

            <div class="flex items-center ml-2 mt-2 cursor-pointer">
              More options{" "}
              {showExtra ? <MdKeyboardArrowUp onClick={()=>toggleShowExtra()}/> :<MdKeyboardArrowDown onClick={()=>toggleShowExtra()}/>}
            </div>
            :
            null

}

            {
              showExtra &&
            
            <div>
              {
   
   userdata?.leadForm?.job &&
              <div class="mt-2">
                {/* <p class="ml-2">Job</p> */}
                <input
                  type="text"
                  placeholder="Enter Job"
                  class="outline-none p-2 w-[100%]  border rounded-3xl mt-[2px]"
                  onChange={(e)=>setData({...data,job:e.target.value})}
                value={data.job}
                />
              </div>
}

{
   
   userdata?.leadForm?.company &&
              <div class="mt-2">
                {/* <p class="ml-2">Company</p> */}
                <input
                  type="text"
                  placeholder="Enter Company"
                  class="outline-none p-2 w-[100%]  border rounded-3xl mt-[2px]"
                  onChange={(e)=>setData({...data,company:e.target.value})}
                value={data.company}
                />
              </div>

}

{
   
   userdata?.leadForm?.note &&
              <div class="mt-2">
                {/* <p class="ml-2">Message</p> */}
                <textarea
                  type="text"
                  placeholder="Enter Message"
                  class="outline-none p-2 w-[100%]  border rounded-3xl mt-[2px] h-[150px]"
                  onChange={(e)=>setData({...data,message:e.target.value})}
                value={data.message}
                ></textarea>
              </div>
}
            </div>

}
            <div class="w-[100%] border rounded-3xl mt-[15px] h-[50px] bg-black flex justify-center items-center text-white cursor-pointer" onClick={()=>addData()}>
              Submit
            </div>
          </div>

          <ToastContainer position="top-center" autoClose={2000} />


       </div>
     </Box>
     </Modal>
     
    </div>
  )
}

export default LeadformModal