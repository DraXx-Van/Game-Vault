import React from 'react'

const RightSidebar = ({tab}) => {
  return (
    <div className={`bg-[#0c0c0e] rounded-3xl transition-all ease-in-out duration-500 shrink-0 ${tab ? "w-72 p-4" : "w-0" }`}>
      
    </div>
  )
}

export default RightSidebar
