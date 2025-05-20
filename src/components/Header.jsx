import React from 'react'

function Header() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around items-center px-4 py-4 gap-3">
        <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded shadow flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left lg:w-1/2 space-y-2">
            <h3 className="text-2xl font-bold">WOODEN</h3>
            <h3 className="text-2xl font-bold">MINIMALISTIC</h3>
            <h3 className="text-2xl font-bold">CHAIRS</h3>
            <h5>SEAT UP TO</h5>
            <h3 className="text-2xl font-bold text-green-500">40% Off</h3>
            <button className="bg-black text-white rounded hover:bg-gray-500">Shop Now!</button>
          </div>
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <img src="https://i.postimg.cc/zXRdyts7/Screenshot-2025-05-20-123536.png" alt="Chair" className="w-full h-auto object-contain" />
          </div>
        </div>
{/* 2 */}
        <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded shadow text-center">
          <h3 className="text-xl font-bold mb-2">PACK 5 T-SHIRTS FOR SUMMER</h3>
          <h3 className="text-lg text-gray-600 mb-4">Starting at <span className='text-orange-500 font-bold'>$99.99</span></h3>
          <div className='justify-center items-center  flex h-auto object-contain'>
          <img src="https://i.postimg.cc/pXYsQhd5/Screenshot-2025-05-20-123827.png" alt="T-Shirts" className="w-[50%] justify-center items-center  flex h-auto object-contain" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
