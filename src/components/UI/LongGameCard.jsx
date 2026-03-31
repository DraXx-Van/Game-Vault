import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LongGameCard = () => {
  return (
    <div className='aspect-2/3 w-full relative overflow-hidden group rounded-2xl bg-[#18181b] border border-white/5 transition-all duration-500 hover:-translate-y-1.25'>
      <img className='relative w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' 
      src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/library_600x900_2x.jpg" alt="Not found" />

      <div className='absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80'></div>

      <div className='absolute bottom-0 left-0 right-0 p-4'>
        <span className='inline-block px-1.5 py-1 text-[8px] rounded uppercase font-black tracking-widest mb-2 shadow-sm border border-white/6 bg-green-500/10 text-green-500/90'>Completed
        </span>
        <h4 className='font-bold text-[14px] leading-tight text-white mb-2 drop-shadow-md line-clamp-2'>UNCHARTED Legacy of Thieves Collection</h4>
        <div className='flex items-center justify-between text-[10px] text-[#94a3b8] font-bold pt-2 border-t border-white/10'>
            <div className='flex items-center space-x-1.5 opacity-70'>
                <i className="ri-time-line text-yellow-500/80"></i>
                <span>12h</span>
            </div>
            <div className='flex items-center space-x-1 text-yellow-500/80'>
                <i className="ri-star-fill"></i>
                <span class="flex items-center text-[10px]">10</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LongGameCard
