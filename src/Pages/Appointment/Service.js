import { specialCharMap } from '@testing-library/user-event/dist/keyboard'
import React from 'react'

export default function Service({service,setTreatment}) {
  const {name,slots} = service;
  return (
    <div class="card bg-base-100 w-96 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">{service.name}</h2>
      <p>{slots.length > 0? <span>{slots[0]}</span> : <span className='text-red-500'>Try Another Day</span> }</p>
      <p>{slots.length }{slots.length > 1? ' space': ' spaces'} avialable</p>
      <div class="card-actions justify-end">
        <label for="booking-modal" onClick={()=> setTreatment(service)} disabled={slots.length === 0} class="btn  btn-primary uppercase text-xl">Book Appointment</label>    
      </div>
    </div>
  </div>
  )
}
