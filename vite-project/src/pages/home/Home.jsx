import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import BookingBar from '../../components/booking/BookingBar'
import RoomCard from '../../components/room/RoomCard'
import FeaturedRooms from '../../components/room/FeaturedRooms'


const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <BookingBar/>
      <FeaturedRooms/>
    </div>
  )
}

export default Home
