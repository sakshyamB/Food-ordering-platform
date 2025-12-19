import React from 'react'
import Nav from '../Componets/Nav'
import Categories from '../Category'
import Foods from '../Food'
const Home = () => {
  return (
    <div className='w-full min-h-screen bg-slate-200'>
      <Nav />
      <div className='flex justify-around gap-4 flex-wrap p-2 md:p-4'>
        {Categories.map((item) => (
          <div className="h-20 md:h-40 md:w-40 w-20 transition-transform duration-300 hover:bg-green-200 cursor-pointer flex rounded-lg shadow-xl items-center flex-col gap-3 justify-center bg-white" key={item.id}>
            <span>{item.icon}</span>
            <span className='font-bold text-sm md:text-xl'>{item.name} </span>
          </div>
        ))}
        <div className='flex justify-around gap-4 flex-wrap p-2 md:p-4'>
          {Foods.map((item) => (
            <div key={item.id} className='border-2 group h-60 md:h-80 w-40 md:w-60 shadow-2xl'>
              <div className='overflow-hidden'><img className=' transition-transform duration-300 group-hover:scale-105 h-30 md:h-45 w-40 md:w-60 object-cover' src={item.image}></img></div>
              <div className='text-center font-bold md:text-2xl'>{item.name}</div>
              <div className='font-bold text-sm md:text-lg'> NPR. {item.price}/-</div>
              <div className={`font-bold ${item.type === "🟢veg" ? "text-green-400" : "text-red-400"}`}>{item.type}</div>
              <div className='flex justify-center items-center'>
              <button className='hover:text-black hover:cursor-pointer p-1 bg-green-300 md:m-4 m-2 rounded-lg '>Add to Cart</button></div>            
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
