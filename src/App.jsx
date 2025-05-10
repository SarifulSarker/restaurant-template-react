import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import './App.css'
import Service from './components/Service/Service'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:500,
      easing: "ease-in-sine",
      delay : 100,
    });
    AOS.refresh();
  },[]);
  return (
   <>
    
       <Navbar/>
     <Hero/>
     <Service/>
     <Testimonial/>
     <Footer/>
   
   </>
  )
}

export default App
