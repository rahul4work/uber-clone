import React from 'react'
import { Link } from 'react-router-dom'
import backImageMobile from './images/uber-start-img-mobile.jpg'

const Start = () => {
  return (
    <div>
      <div
        className="h-screen pt-8 flex justify-between flex-col w-full"
        style={{
          backgroundImage: `url(${backImageMobile})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img 
          className="w-20 ml-8 font-bold" 
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" 
          alt="Uber logo" 
        />
        <div className="bg-white pb-7 py-5 px-5">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
