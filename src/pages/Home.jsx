import React from 'react'
import Nav from '../Componets/Nav'
import Categories from '../Category'
const Home = () => {
  return (
    <div className='w-full min-h-screen bg-slate-200'>
      <Nav />
      <div className='flex justify-around gap-4 flex-wrap p-4'>
        {Categories.map((item) => (
          <div className="h-20 md:h-40 md:w-40 w-20 hover:bg-green-200 cursor-pointer flex rounded-lg shadow-xl items-center flex-col gap-3 justify-center bg-white" key={item.id}>
           <span>{item.icon}</span>
          <span className='font-bold text-sm md:text-xl'>{item.name} </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
