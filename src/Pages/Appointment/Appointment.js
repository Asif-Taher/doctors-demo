import React, { useState } from 'react'
import Footer from '../Shared/Footer/Footer'
import AppointmentBanner from './AppointmentBanner'
import AvailableAppointment from './AvailableAppointment'
export default function Appointment() {
  // const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner></AppointmentBanner>
 
      <Footer></Footer>
    </div>
  )
}
