import React from 'react'
import { CircleLoader} from 'react-spinners'

const Loader = () => {
    return (
        <div className='h-[100vh] max-w-[420px] w-[100%] flex justify-center items-center'>
            <CircleLoader color="black" />
        </div>
    )
}

export default Loader