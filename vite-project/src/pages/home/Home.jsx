import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import BookingBar from '../../components/booking/BookingBar'
import RoomCard from '../../components/room/RoomCard'
import FeaturedRooms from '../../components/room/FeaturedRooms'
import WhyChoose from '../../components/whychoose/WhyChoose'
import Testimonials from '../../components/testimonials/Testimonials'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <BookingBar/>
      <FeaturedRooms/>
      <WhyChoose />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
