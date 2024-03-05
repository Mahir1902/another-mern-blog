import React from 'react'

export default function Pagination() {
  return (
    <div className='flex justify-between font-medium'>
      <button className='bg-red-500 w-[7rem] py-4 rounded-lg text-center'>Previous</button>
      <button className='bg-red-500 w-[7rem] py-4 rounded-lg'>Next</button>
    </div>
  )
}
