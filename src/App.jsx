import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react'
import './App.css'
import Contact from './Components/Contact/Contact'
import Education from './Components/Education/Education'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Spinner from './Components/Spinner/Spinner'

function App() {
  const [loading,setLoading]=useState(false);

  const myFun =document.onload=function(){
    console.log("Loaded");
  }

 useEffect(()=>{
  myFun();
  setLoading(true)
 
 },[])

  return  <>
  
    <Hero/>
    <Education/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    <Toaster />
    </>

}

export default App
