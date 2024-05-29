import React from 'react'

function Sliders  ( {item} )  {
  console.log(item);
  return (
   <>
   <div className='mt-4 my-4'>
   <div className="card w-60 bg-base-100 shadow-xl hover:scale-105 duration-200">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline p-4 cursor-pointer">${item.price}</div> 
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer p-4 duration-200">Buy now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Sliders