import React from 'react'
import Sidebar from '../components/Layout/Sidebar'
import RightSidebar from '../components/Layout/RightSidebar'
import MainContent from '../components/Layout/MainContent'

const Home = () => {
  return (
    <div className='flex h-screen gap-4 p-4 text-white bg-[#050505] text-sm overflow-hidden'>
      <Sidebar />
      <MainContent />
      <RightSidebar />
    </div>
  )
}

export default Home
