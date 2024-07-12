import React from 'react'
import Service from './Service'
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
export default function Services() {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            descripttion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, accusantium',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filing',
            descripttion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, accusantium',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth whitening',
            descripttion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, accusantium',
            img: whitening
        },
    ]
  return (
    <div className='my-28'>
        <div className='text-center'> 
        <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
        <h4 className='text-3xl mt-2'>Services we provide</h4>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {
                services.map(service =><Service
                key={service._id}
                service = {service}
                ></Service>)
            }
        </div>     
        </div>
    </div>
  )
}
