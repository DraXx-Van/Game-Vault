import React from 'react'
import Hero from '../Hero/Hero'
import FeaturedHeading from '../UI/FeaturedHeading'
import FilterButtons2 from '../UI/FilterButtons2'
import GameCard from '../UI/GameCard'
import LongGameCard from '../UI/LongGameCard'


const MainContent = () => {
  return (
    <div className='flex-1 h-full flex flex-col rounded-3xl gap-4 overflow-y-auto scroll-smooth overflow-x-hidden scrollbar-hide'>
      <Hero />
      
      <div className='flex flex-col shrink-0 w-full'>
        <div className='flex items-center justify-between group px-2'>
          <FeaturedHeading heading={"Discover Deals"}/>
          <div className='bg-[#18181b]/30 rounded-lg flex gap-1 p-1 border-white/5 border'>
            <FilterButtons2 isActive={true} label={"Deals"}/>
            <FilterButtons2 isActive={false} label={"Top rated"}/>
            <FilterButtons2 isActive={false} label={"Trending"}/>
          </div>
        </div>

        <div className='flex gap-4 overflow-x-auto snap-x scrollbar-hide pb-6 w-full px-2 py-6'>
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
        
      </div>

      <div className='flex flex-col shrink-0 w-full'>
        <div className='flex items-center justify-between group px-2'>
          <FeaturedHeading heading={"My vault"}/>
          <div className='bg-[#18181b]/30 rounded-lg flex gap-1 p-1 border-white/5 border'>
            <FilterButtons2 isActive={true} label={"ALL"}/>
            <FilterButtons2 isActive={false} label={"Playing"}/>
            <FilterButtons2 isActive={false} label={"Backlog"}/>
            <FilterButtons2 isActive={false} label={"Completed"}/>
          </div>
        </div>

        <div className='Library-grid gap-6 px-2 py-6'>
          <LongGameCard />
          <LongGameCard />
          <LongGameCard />
          <LongGameCard />
          <LongGameCard />
          <LongGameCard />
          <LongGameCard />
        </div>
      </div>


    </div>
  )
}

export default MainContent
