import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";
import { onValue, ref, update } from "firebase/database";
import { returnIcons, returnSocialUrl } from "../assets/ReturnSocialIcons";
import Loader from "../assets/components/Loader";
import VCard from "vcard-creator";
import NotFound from "./NotFound";
import LeadformModal from "../assets/components/LeadformModal";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const Home = () => {
  let { userid } = useParams();
  let [userdata, setuserdata] = useState(null);
  let [sociallink, setsociallink] = useState([]);
  let [loading, setloading] = useState(true);

  // console.log(sociallink);

  // ------------------getting Data--------------------



  let [usersdata, setusersdata] = useState(null);

  useEffect(() => {
    console.log("test1");
    const starCountRef = ref(db, `User/`);
    onValue(starCountRef, async (snapshot) => {
      console.log(snapshot.val());
      const data = await snapshot.val();
      setusersdata(Object.values(data));

      // if (data.links) {
      //     setsociallink(Object.values(data.links))

      // }
    });
  }, []);

  console.log(usersdata);

  let [notfound, setnotfound] = useState(false);
  let [endpoint, setendpoint] = useState("");
  let [showSlide, setshowSlide] = useState(false);

   let [modal,setModal]=useState(false)

    let handleModal=()=>{
      setModal(!modal)
    }


    let currentDate=Date.now()
    const oneWeek = 7 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    if (usersdata) {
      let checklist = usersdata?.some((elm) => {
        return userid === elm?.id || userid === elm?.userName;
      });
      console.log(checklist);
      if (checklist) {
        console.log("true");
        usersdata?.map((elm) => {
          if (userid === elm?.id || userid === elm?.userName) {
            console.log(elm);
            setuserdata(elm);
              setModal(elm?.leadMode)
              if(elm?.Analytics){
                if(currentDate>=elm?.Analytics?.updatedAt + oneWeek){
                update(ref(db, `User/${elm?.id}/Analytics`),{totalClicks:elm?.Analytics?.totalClicks+1,updatedAt:currentDate,linksEngPstWk:elm?.Analytics?.linksEngCrntWk,tContactsMePstWk:elm?.Analytics?.tContactsMeCrntWk}).then(()=>{
                  update(ref(db, `User/${elm?.id}/Analytics`),{linksEngCrntWk:0,tContactsMeCrntWk:0})
                })

                }
                else{
                  update(ref(db, `User/${elm?.id}/Analytics`),{totalClicks:elm?.Analytics?.totalClicks+1,updatedAt:currentDate})
                }
              }
              else{
                update(ref(db, `User/${elm?.id}/Analytics`),{totalClicks:1,linksEngCrntWk:0,linksEngPstWk:0,tContactsMeCrntWk:0,tContactsMePstWk:0,updatedAt:currentDate})
              }
              
            // if (elm.links) {
            //     console.log(elm)
            // setsociallink(Object.values(elm?.links ))


          elm?.links &&  setsociallink(Object.values(elm?.links));

            // }
            setloading(false);
          }
          // else if (elm?.tagUid?.some((el) => { return userid == el?.id })) {
          //     setuserdata(elm)
          //     setsociallink(elm?.links)
          //     setloading(false)
          // }
        });
      } else {
        setloading(false);
        setnotfound(true);
      }
    }
  }, [usersdata]);

  console.log(userdata);




  
// -----------------------------------------hex to rgba for bg color-------------------------------------

let hexToRGBA=(hex)=> {
    // Remove the '#' character if present
    hex = hex?.replace('#', '');
    
    // Convert the hex value to RGB
    const red = parseInt(hex?.substring(0, 2), 16);
    const green = parseInt(hex?.substring(2, 4), 16);
    const blue = parseInt(hex?.substring(4, 6), 16);
    
    // Convert RGB to RGBA with alpha value 0.1
    const rgba = `rgba(${red}, ${green}, ${blue}, 0.1)`;
    
    return rgba;
  }


// Download Vcf file

let downloadVcf = async () => {
  // Define a new vCard
  const myVCard = new VCard();

  // Some variables
  const lastname = userdata?.name;
  const firstname = "";
  const additional = "";
  const prefix = "";
  const suffix = "";

  myVCard
    .addName(lastname, firstname, additional, prefix, suffix)
    .addJobtitle(userdata?.job)
    .addCompany(userdata?.company)
    .addEmail(userdata?.email)
    .addPhoneNumber(userdata?.phone)
    .addAddress(null, null, userdata?.location)

  sociallink?.map((link) => {
    myVCard.addSocial(link.value, link.name, link.name);
  });

  const vcardData = myVCard.toString();
  const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Tapnow.vcf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <>
    {loading ? <Loader /> :
    
   <>
   {notfound  ? <NotFound /> :
    <div className="min-h-[100vh] max-w-[420px] w-[100%] flex flex-col items-center rounded-md  relative">
      {/* <ToastContainer position="top-center" autoClose={2000} /> */}

      <LeadformModal modal={modal} handleModal={handleModal} userdata={userdata}/>
      <div className="w-[96%] shadow-lg min-h-[100vh] relative">
        <div className="min-h-[350px] w-[100%] relative  object-cover " style={{background: `linear-gradient(to bottom, ${hexToRGBA(userdata?.colorCode)},${hexToRGBA(userdata?.colorCode)}, white)`}}>
          <img
            src={userdata?.bgImg ? userdata?.bgImg : `https://placehold.co/390x185`}
            alt="background"
            className="h-[185px] w-[100%] "
          />

          <div className="h-[160px] w-[100%] absolute top-[90px] flex justify-center">
            <div className="h-[100%] w-[160px] relative">
              <img
                src={userdata?.logoImg ? userdata?.logoImg : `https://placehold.co/60x60`}
                alt="logo"
                className="absolute bottom-[20px] right-[-25px] h-[60px] w-[60px] rounded-full border-[4px] border-white"
              />
              <img
                src={userdata?.profileUrl ? userdata?.profileUrl : `https://placehold.co/160x160`}
                alt="profile"
                className="h-[100%] w-[160px] rounded-full border-[5px] border-white"
              />
            </div>
          </div>

          <div className="w-[100%] flex justify-center mt-[70px] ">
            <h2 className="text-2xl font-medium">{userdata?.name}</h2>
          </div>

          {userdata?.job && userdata?.company ? (
            <div className="w-[100%] flex justify-center mt-[5px] ">
              <h2 className=" font-medium text-[#2e363c]">
                {userdata?.job} at {userdata?.company}
              </h2>
            </div>
          ) : (
            <>
              <div className="w-[100%] flex justify-center mt-[5px] ">
                <h2 className="text-lg font-medium text-[#2e363c]">
                  {userdata?.job}{" "}
                </h2>
              </div>
              <div className="w-[100%] flex justify-center mt-[5px] ">
                <h2 className="text-lg font-medium text-[#2e363c]">
                  {userdata?.job}
                </h2>
              </div>
            </>
          )}

          <div className="w-[100%] flex justify-center mt-[5px] ">
            <h2 className=" text-[#2e363c]">{userdata?.location}</h2>
          </div>

          <div className="w-[100%] flex justify-center mt-[15px] text-center">
            <p className="text-sm font-medium text-[#2e363c] w-[90%]">
              {userdata?.bio}
            </p>
          </div>
          <div className={`w-[100%] h-[80px] flex justify-center  mt-[20px] cursor-pointer`} >
          {/* bg-gradient-to-b from-[${hexToRGBA(userdata?.colorCode)}] to-white */}
            <div className={`w-[300px] h-[55px]  rounded-full flex justify-center items-center text-xl text-white font-medium`} style={{backgroundColor:userdata?.colorCode}} onClick={()=>downloadVcf()}>
              Save Contact
            </div>
          </div>
        </div>



        <div className="w-[100%] flex justify-center mt-[6px]">
<div className=" w-[70%]  grid grid-cols-3 gap-x-4 mr-[10px]">
{
    sociallink?.map((elm)=>{
        return (
            <>
              <a
                target="_blank"
                href={returnSocialUrl(elm?.name, elm?.value)}
                class="h-[130px] w-[100px] flex flex-col  items-center mt-2 "
              >
                <img
                  src={returnIcons(elm?.name)}
                  alt="img"
                  class={` ${
                    elm?.name === "Calendly"
                      ? "h-[67px] w-[67px] rounded-[10px] shadow-md"
                      : "h-[70] w-[70px]"
                  }`}
                  // style={elm?.name==='Calendly'? {borderRadius:'10px'}:null}
                />
                <h2 class="font-medium text-sm mt-4">{elm?.name}</h2>
              </a>
            </>
          );
    })
}
</div>
        </div>

        <div className=" w-[100%] h-[150px]  flex justify-center items-center mt-[80px]" style={{background: `linear-gradient(to top, ${hexToRGBA(userdata?.colorCode)},${hexToRGBA(userdata?.colorCode)}, white)`}}>
<div className="h-[45px] w-[250px] rounded-full border-t shadow-xl flex justify-center items-center text-lg font-medium cursor-pointer">
    Create your own profile
</div>
        </div>
      </div>
    </div>
}
    </>
    }
    </>

  );
};

export default Home;
