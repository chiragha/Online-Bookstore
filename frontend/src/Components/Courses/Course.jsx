import React from 'react';
import Sliders from '../Slider/Sliders';
import list from '../cards/list.json';
import { Link } from 'react-router-dom';

function Course () {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We are delighted to have you<span className='text-pink-500'> here! </span></h1>
          <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea libero fugit temporibus quae excepturi aperiam eaque
             fugiat quas eligendi, quisquam earum maxime deserunt pariatur tempora?</p>


             <Link to="/">
             <button className='bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
             </Link>
             
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item)=>(
            <Sliders key={item.id} item={item}/>
          ))
        }
      </div>
    </div>   
    </>
  )
}

export default Course