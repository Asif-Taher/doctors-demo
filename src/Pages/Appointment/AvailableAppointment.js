
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import Service from './Service';
import BookingModal from './BookingModal';

export default function AvailableAppointment({date}) {
  console.log(date)
  const [services, setServices] = useState([]);
  const [treatment,setTreatment] = useState(null); 

  useEffect(()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return (
    <div>
          <h3 className='text-xl text-primary text-center'>Avialable service on:{format(date,'pp')}</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
              services.map((service)=><Service
              key={service._id}
              service = {service}
              setTreatment = {setTreatment}
              ></Service>)
            }
          </div>
          {treatment && <BookingModal date={date} treatment={treatment}></BookingModal>}

    </div>
  )
}
