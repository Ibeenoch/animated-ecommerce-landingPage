import React from 'react'
import NavBar from '../atomicDesign/organism/navbar/NavBar'
import HomeComponent from '../components/home/Home'
import Footer from '../atomicDesign/organism/footer/Footer'

const Home = () => {
  return (
    <div>
        <NavBar />
        <HomeComponent/>
        <Footer />
      
    </div>
  )
}

export default Home
