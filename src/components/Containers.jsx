import React from 'react'
import { Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';


const items = [
    { id: 1 ,descripcion:'CASACAS'},
    { id: 2 ,descripcion:'PANTALONES'},
    { id: 3 ,descripcion:'POLOS'},
    // More items...
  ]

export default function Containers() {
  return (
 
  <ul role="list" className="space-y-3 pt-2 pl-6 pr-6 pb-10 rounded-3xl ">
    {items.map((item) => (
      <Button  key={item.id} className='w-full  shadow-xl shadow-green-300 outline outline-black/5 ' >
      <li key={item.id} className="overflow-hidden ml-4 mr-4 px-4 py-4 
       sm:px-6 text-center  text-4xl font-Londrina-Shadow  drop-shadow-[0_1.2px_4.2px_rgba(0,0,0,0.8)]
       "> {item.descripcion}
      </li>
      </Button>
    ))}
  </ul>
   

  )
}
