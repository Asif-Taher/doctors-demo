import React from 'react'
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton'
export default function MakeAppointment() {
  return (
    <div>
      <section style={{
        background: `url(${appointment})`
      }} className='flex justify-center items-center'>
        <div className='flex-1 mt-[-100px] hidden lg:block'>
            <img src={doctor} alt="" />
        </div>
        <div className='flex-1 px-5 p-3' >
            <h3 className='text-xl text-primary '>Appointment</h3>
            <h2 className='text-3xl my-5'>Make an Appointment today </h2>
            <p className='text-white mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum sequi corporis autem enim, dolorem veritatis deserunt doloribus alias suscipit laudantium quos a eos voluptates quibusdam! Velit nostrum tempora mollitia maxime, quaerat consectetur recusandae? Possimus modi repellendus quo eaque eligendi.</p>
            <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </section>
    </div>
  )
}
