import React from 'react'

function Navbar() {
  return (
 <>
 <div>
    <nav className='bg-amber-400  '>
        <ul className=' lg:flex justify-around text-md p-4 hidden'>
            <li>All CATEGORISE</li>
            <li>TODAY DEALS</li>
            <li>ELECTRONICS</li>
            <li>CLOTHINGS</li>
            <li>COMPUTERS</li>
            <li>FURNITURES</li>
            <li>MOM&BABY</li>
            <li>BOOKS&More</li>
        </ul>
      <div className=' flex justify-between p-3 lg:hidden'>
        <h3 className='font-bold'>Style</h3>
        <button className='bg-gray-900 rounded hover:bg-gray-500 text-white'>Login</button>
      </div>
    </nav>
 </div>
 </>
  )
}

export default Navbar