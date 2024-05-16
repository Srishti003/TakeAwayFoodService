import React, { useState, useEffect , useRef} from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
     <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main className="flex flex-wrap justify-center bg-rose-100 bg-cover bg-center min-h-screen" 
        style={{ backgroundImage: "url('https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg')" }}>
        {/* <div className= "pt-20 text-orange-500">
          Shree Ganesh!
        </div> */}
        <div className= "pt-20">
          .
        </div>
         <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  ) : null
}

export default App