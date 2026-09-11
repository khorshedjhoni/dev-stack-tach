import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Technologies from './Components/Technologies'

function App() {

  const techPromises =async()=>{
    const res = await fetch('/data.json')
    const data = await res.json()
   
    return data
  }
  

  return (
    <>
      
      <div className='container mx-auto px-14 mt-2'>
         <Navbar></Navbar>
         <Banner></Banner>
         <Suspense fallback={<p>Loading....</p>}>
          <Technologies techPromises={techPromises()}></Technologies>
         </Suspense>
      </div>
      
    </>
  )
}

export default App
