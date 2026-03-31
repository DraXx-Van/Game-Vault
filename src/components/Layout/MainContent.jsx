import React from 'react'
import Hero from '../Hero/Hero'
import FeaturedHeading from '../UI/FeaturedHeading'
import FilterButtons2 from '../UI/FilterButtons2'


const MainContent = () => {
  return (
    <div className='flex-1 flex flex-col rounded-3xl gap-4 overflow-y-auto scroll-smooth overflow-x-hidden'>
      <Hero />

      <div className='flex flex-col shrink-0 w-full'>
        <div className='flex items-center justify-between group px-2'>

        <FeaturedHeading />

        <div className='bg-[#18181b]/30 rounded-lg flex gap-1 p-1 border-white/5 border'>
          <FilterButtons2 isActive={true} label={"Deals"}/>
          <FilterButtons2 isActive={false} label={"Top rated"}/>
          <FilterButtons2 isActive={false} label={"Trending"}/>
        </div>

        

      </div>
      </div>

    </div>
  )
}

export default MainContent
