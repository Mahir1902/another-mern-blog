

export default function Featured() {
  return (
    <div className='mt-8'>
      {/* Maybe can give featutred post title instead? */}
      {/* <h1 className='lg:text-[4.5rem] xl:text-[6rem]'><b>Hey there!</b> Discover my sotries and creative ideas</h1> */}
      <h1 className=' font-bold text-3xl'>Featured Post</h1>

      {/* posts */}
      <div className=' mt-[2.5rem] flex items-center gap-[3.125rem]'>
        <div className=' max-lg:hidden flex-1 h-[31.25rem] object-cover relative'>
          <img src="https://images.unsplash.com/photo-1697219590638-d2db7748802e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D" alt="post image"  className='h-full w-full object-cover rounded-lg' />
        </div>
        <div className='flex-1 flex flex-col gap-5'>
          <h1 className='text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
          <p className='text-[1rem] md:text-[1.25rem] text-softTextColor'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, est ad esse ducimus voluptates dolor, explicabo similique autem itaque asperiores doloremque illo temporibus! Vero neque corrupti animi, laboriosam voluptatum beatae!
          </p>
          <button className='px-3 py-2 md:px-5 md:py-3 dark:bg-white w-[8rem] rounded-md dark:text-black font-semibold bg-softBg'>
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

