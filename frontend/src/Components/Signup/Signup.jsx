import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login/Login';
import { useForm } from "react-hook-form";

function Signup () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);
  return (
    <>
         <div className='flex justify-center items-center h-screen'>
         <div >
  <div className=' modal-box border-2px bg-slate-100 rounded-md shadow-md p-6' >
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
  
    <h3 className="font-bold text-lg">Signup</h3>



    {/* name section */}

    <div className="mt-4">
       <span>Name:</span>
       <input type="text"  placeholder='Enter Your Name' className='w-80 px-3 m-2 border rounded-md outline-none' {...register("name", { required: true })}/>
       <br/>
       {errors.email && <span className='text-sm text-pink-500'>This field is required</span>}
    </div>


     {/* email section */}
    <div className="mt-4">
       <span>Email:</span>
       <input type="email"  placeholder='Enter Your Email' className='w-80 px-3 m-2 border rounded-md outline-none' {...register("email", { required: true })}/>
       <br/>
       {errors.email && <span className='text-sm text-pink-500'>This field is required</span>}
    </div>
   

   {/* password section */}
    <div className="mt-4">
       <span>Password:</span>
       <input type="password"  placeholder='Enter Your Password' className='w-80 px-3 m-2 border rounded-md outline-none' {...register("password", { required: true })}/>
       <br/>
       {errors.password && <span className='text-sm text-pink-500'>This field is required</span>}
    </div>
   


   {/* button section */}

   <div className='flex justify-between mt-3'>
    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
    <p>Already registered 
        <button className='underline text-blue cursor-pointer mx-1 text-l' onClick={() => document.getElementById("my_modal_3").showModal()}>Login
        </button>
        <Login />
    </p>
   </div>
   </form>
  </div>
        </div>
         </div>
    </>
  )
}

export default Signup