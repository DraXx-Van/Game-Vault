import React from 'react'

const FilterButtons2 = ({isActive,label,onSelect}) => {


  return (
    <div>
      <button
      value={label}
      onClick={onSelect} 
      className={`flex items-center rounded-md px-4 py-1.5 text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer 
      ${isActive 
      ? 'bg-[#f59e0b] text-black ' 
      : 'text-white/50 hover:text-white hover:bg-white/10'
      }`}>{label}
    </button>
    </div>
  )
}

export default FilterButtons2
