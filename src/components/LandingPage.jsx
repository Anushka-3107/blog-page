import React from 'react'
import Cities from './Cities'
import CityModal from './CityModal'

const LandingPage = () => {
  return (
    <div className='mx-auto p-6 flex flex-col justify-center'>
        <h1 className='text-3xl font-bold mb-8 text-center'>Travel Page</h1>
           <Cities />
           
    </div>
  )
}

export default LandingPage