import React from 'react'
import Banner from './Banner'
import Info from './Info'
import Services from './Services'
import MakeAppointment from './MakeAppointment'
import Testimonial from './Testimonial'
import Footer from '../Shared/Footer/Footer'

export default function Home() {
  return (
    <div className='px-12'>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  )
}
