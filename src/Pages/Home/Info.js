import React from 'react'
import InfoCart from './InfoCart'
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
export default function Info() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
      <InfoCart cartTitle="Opening Hours" bgClass="bg-secondary" img={clock}></InfoCart>
      <InfoCart cartTitle="Our Locations" bgClass="bg-accent" img={marker}></InfoCart>
      <InfoCart cartTitle="Contact Us"    bgClass="bg-primary" img={phone}></InfoCart>
    </div>
  )
}
