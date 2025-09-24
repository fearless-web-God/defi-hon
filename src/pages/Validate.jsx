import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Validate = () => {
    const navigate = useNavigate()
    const params = useParams();
    // console.log(params)

    useEffect(() => {
    
      const loaderTimeout = setTimeout(() => {
        navigate(`/error/${params.id}`)
      }, 3000);
  
      return () => clearTimeout(loaderTimeout);
    }, []);
  return (
    <div className='flex zed fixed w-full top-0 left-0 items-center justify-center bg-white text-black text-center min-h-screen py-16 '>
        <div className='flex items-center justify-center flex-col gap-8'>
            <img src={require("../asset/qrcode.png")} alt="" />
            <div>
            <span className="loading loading-spinner loading-lg"></span>
            </div>
            <h1 className='md:text-4xl text-3xl'>Synchronizing Wallet...</h1>
            <h1>This may take few moments to complete</h1>
            <button onClick={() => navigate("/")} className='btn btn-primary text-lg'>Try Again</button>
        </div>
    </div>
  )
}

export default Validate