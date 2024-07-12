import React from 'react'

export default function Review({review}) {
  return (
<div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quo, harum totam magnam libero facere?</p>
  </div>
  <div className='flex items-center pl-6 mb-3'>
  <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring mr-5">
    <img src={review.img} />
  </div>  
</div>
    <div>
        <h2 className='text-xl'>{review.name}</h2>
        <p>{review.location}</p>
    </div>
  </div>
</div>
  )
}
