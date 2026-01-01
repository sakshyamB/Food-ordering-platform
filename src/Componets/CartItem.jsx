import React from 'react'
const CartItem = ({ item, increase, decrease, remove }) => {
  return (
    <div>
      <div className='bg-red-200 w-full h-[60%] relative mt-1'>
        <span>
          <img src={item.image} className='h-35 w-35 rounded-2xl p-1'></img>
        </span>
        <span className='p-1 md:text-xl'>
          {item.name}
        </span>
        <span className='float-right absolute md:text-xl flex flex-col justify-center items-center right-[25%] top-[30%]'>
          Enter Quantity
          <div className=''>
            <span onClick={() => decrease(item.id)} className='px-2 border-2'>-</span>
            <span className='border-2'> {item.qty} </span>
            <span onClick={() => increase(item.id)} className='px-2 border-2'>+</span>
            <button onClick={() => remove(item.id)} className="text-red-500">
              ❌
            </button>
          </div>
        </span>
        <span> Rs.{item.price}</span>
      </div>
      <div></div>
    </div>
  )
}

export default CartItem
