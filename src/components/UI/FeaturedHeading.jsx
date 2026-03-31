import React from 'react'

const FeaturedHeading = () => {
  return (
    <div className='flex gap-2 items-center h-10'>
        <div className='w-1.5 h-6 rounded-full bg-[#f59e0b] group-hover:scale-y-150 transition-all duration-300
        group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] '></div>
        <h2 className='uppercase font-normal text-xl italic'>Discover Deals</h2>
    </div>
  )
}

export default FeaturedHeading
