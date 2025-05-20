import React from 'react'
import Categores from './Categores'

function Categoriesmain() {
  return (
    <>
      <div>
        <h3 className=" lg:text- mb-4 text-start">The Categories Of The Month</h3>
        <hr className='text-gray-200' />
      </div>

{/* cards */}
      <div className="flex flex-wrap gap-4 justify-center px-4">
        <Categores
          img="https://i.postimg.cc/D0F9xQQR/Screenshot-2025-05-20-115302.png"
          title="Hybrid Sofa"
          des="Modern 3-Seater Sofa, Hybrid Sofa in a Box"
        />
        <Categores
          img="https://i.postimg.cc/rF5j9df2/Screenshot-2025-05-20-120634.png"
          title="Smart TV"
          des="Nikai FHD LED Smart TV, Built-In Wi-Fi"
        />
        <Categores
          img="https://i.postimg.cc/tTPnH6ZX/Screenshot-2025-05-20-120910.png"
          title="T-Shirts - Vintage"
          des="3 Pcs Men's Oversized Cotton Summer T-Shirts"
        />
        <Categores
          img="https://i.postimg.cc/05n2KZqT/Screenshot-2025-05-20-121128.png"
          title="Beauty Of Joseon"
          des="Beauty Of Joseon Hanyang Owns Scientific"
        />
        <Categores
          img="https://i.postimg.cc/qMGbThyX/Screenshot-2025-05-20-121551.png"
          title="Mi Aha-Bha-Pha"
          des="Some By Mi Aha-Bha-Pha 30 Days Miracle"
        />
        <Categores
          img="https://i.postimg.cc/7YB39gSc/Screenshot-2025-05-20-121822.png"
          title="Board Game"
          des="Hasbro Gaming Candy Land Kingdom Of Sweet Adventures..."
        />
      </div>
    </>
  )
}

export default Categoriesmain
