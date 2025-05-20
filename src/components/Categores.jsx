import React from 'react'

function Categores(props) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
      <div className="border-gray-200 rounded shadow p-4 h-full">
        <img src={props.img} className="w-full h-40 object-contain" />
        <h2 className="font-semibold text-lg mb-1">{props.title}</h2>
        <p className="text-gray-500 text-sm">{props.des}</p>
      </div>
    </div>
  )
}

export default Categores
