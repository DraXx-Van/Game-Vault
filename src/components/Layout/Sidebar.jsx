import React from 'react'
import Logo from '../UI/Logo'
import 'remixicon/fonts/remixicon.css'
import SearchBar from '../UI/SearchBar'
import SidbarButtons from '../UI/SidbarButtons'
import UserProfle from '../UI/UserProfle'


const Sidebar = ({onHubtoggle}) => {
  return (
    <div className='bg-[#0c0c0e] w-64 p-4 rounded-3xl flex flex-col overflow-hidden'>
      <Logo />
      <div className='mt-8 px-2'>
        <SearchBar/>
      </div>
      <div className='flex flex-1 flex-col gap-1 px-2 mt-6'>
        <nav>
          <SidbarButtons isActive={true} navitem={"Home"} logo={"ri-home-3-fill"}/>
          <SidbarButtons navitem={"Store"} logo={"ri-store-3-line"} isActive={false}/>
          <SidbarButtons navitem={"Library"} logo={"ri-book-shelf-line"} isActive={false}/>
          <SidbarButtons navitem={"Activity Hub"} logo={"ri-team-fill"} isActive={false} onClick={onHubtoggle}/>
        </nav>
      </div>
      <div className='pt-5'> 
        <UserProfle />
      </div>
    </div>
  )
}

export default Sidebar
