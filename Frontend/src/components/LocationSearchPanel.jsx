import React from 'react'

const LocationSearchPanel = (props) => {
  //sample array for location
  const location = [
    "204, Shashwat Tower , Sunrise Complex, Waghodia Road, Vadodara",
    "Opp. Sunrise complex Vaikunth Char Rasta, Waghodia Rd, Vadodara",
    "77W2+QP8, Sunmilan Complex, Waghodiya Chokdi, 390019",
    "4th floor, Samanvay Business Square, Vaikunth Char Rasta, Vadodara",
  ]

  return (
    <div>
      {/* this is just a sample data */}
      {
        location.map(function(elem, idx){
          return <div key={idx} onClick={()=>{
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }} className='flex gap-3 border-2 border-gray-100 active:border-black rounded-xl p-3 items-center my-2 justify-start '>
          <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center  rounded-full'><i className="ri-map-pin-fill"></i></h2>
          <h4 className='font-medium'>{elem}</h4>
        </div>
        })
      }
    </div>
  )
}

export default LocationSearchPanel