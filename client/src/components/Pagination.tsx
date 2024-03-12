import React from 'react'


type PaginationProps = {
  totalPosts: number,
  postsPerPage: number,
  setCurrPage: React.Dispatch<React.SetStateAction<number>>
  currPage:number
}


export default function Pagination({totalPosts, postsPerPage, setCurrPage, currPage}: PaginationProps) {

  // let pages = []

  // for(let i = 0; i <= Math.ceil(totalPosts/postsPerPage); i++) {
  //   pages.push(i)
  // }

  const totalPages = Math.ceil(totalPosts/postsPerPage)


  const handleNext =() => {
    setCurrPage(prevPage => Math.min(prevPage + 1, totalPages));
  }

  const handlePrevious = () => {
    setCurrPage(prevPage => Math.max(prevPage - 1, 1));
  }


  return (
    <div className='flex justify-between font-medium'>
      <button className='bg-red-500 w-[7rem] py-4 rounded-lg text-center disabled:bg-red-500/30' onClick={handlePrevious} disabled={currPage === 1}>Previous</button>
      <button className='bg-red-500 w-[7rem] py-4 rounded-lg disabled:bg-red-500/30' onClick={handleNext} disabled={currPage=== totalPages}>Next</button>
    </div>
  )
}
