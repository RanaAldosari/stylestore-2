import React from 'react'

function Footer() {
  return (
    <div className=' lg:bg-gray-100  flex justify-between items-center px-8 py-6 flex-col lg:flex-row'>
      <div className=' lg:max-w-sm flex flex-col justify-center'>
        <h2 className='text-xl font-semibold'>Bose Bluetooth</h2>
        <h2 className='text-lg font-medium'>Wireless Headphones</h2>
        <p className='text-gray-500 text-sm mt-2'>
          Crisp powerful sound from the best sounding wireless headphone in its class.
        </p>
      </div>

      <div className='flex flex-col '>
        <h5 className='text-gray-400 text-sm'>
          $<span style={{ textDecoration: "line-through" }}>260.60</span>
        </h5>
        <h5 className='text-green-500 font-semibold text-lg'>$219.05</h5>
        <button className='bg-amber-400 hover:bg-amber-300 transition rounded-full px-4 py-1 text-xs mt-2'>
          Shop Now
        </button>
      </div>
<div>
        <img
          className=' lg:w-50 h-auto object-contain w-50'
          src="https://media.sku.ninja/hosting/prod/1204293269-atf360/202310121008351066828212.jpg"
          alt="Bose Headphones"
        />
      </div>


      {/* sm */}


    </div>
  )
}
export default Footer
