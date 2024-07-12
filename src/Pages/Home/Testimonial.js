import React from 'react'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'
import Review from './Review'
export default function Testimonial() {
    const reviews = [
        {
            _id:1,
            name: 'winson Herry',
            location: 'spain',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptate laboriosam tempore debitis rem dignissimos magnam animi nisi explicabo? Repudiandae.',
            img: people1
        },
        {
            _id:2,
            name: 'winson Herry',
            location: 'spain',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptate laboriosam tempore debitis rem dignissimos magnam animi nisi explicabo? Repudiandae.',
            img: people2
        },
        {
            _id:3,
            name: 'winson Herry',
            location: 'spain',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptate laboriosam tempore debitis rem dignissimos magnam animi nisi explicabo? Repudiandae.',
            img: people3
        },
    ]
  return (
   <section className='my-28'>
    <div className='flex justify-between'>
        <div className=''>
            <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
            <h3 className='text-3xl'>What our patients says</h3>
        </div>
        <div>
            <img  src={quote} className='w-24 lg:w-48' alt="" />
        </div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            reviews.map(review =><Review
            key={review._id}
            review = {review}
            ></Review>)
        }
    </div>
   </section>
  )
}
