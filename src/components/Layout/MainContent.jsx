import React, { useState } from 'react'
import Hero from '../Hero/Hero'
import FeaturedHeading from '../UI/FeaturedHeading'
import FilterButtons2 from '../UI/FilterButtons2'
import GameCard from '../UI/GameCard'
import LongGameCard from '../UI/LongGameCard'


const MainContent = () => {
  
  const [vaultFilter,setVaultFilter] = useState("all");

  const discoverGames = [
  { 
    id: 324997, 
    name: "Baldur's Gate 3", 
    image: "https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg",
    rating: 97 
  },
  { 
    id: 3498, 
    name: "Grand Theft Auto V", 
    image: "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    rating: 92 
  },
  { 
    id: 58175, 
    name: "Red Dead Redemption 2", 
    image: "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    rating: 96 
  }
];

  const vaultGames = [
  { id: 1, name: "Starfield", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/library_600x900_2x.jpg", status: "Completed", hours: "0h", rating: "10" },
  { id: 2, name: "Crimson Desert", image: "https://media.rawg.io/media/games/60e/60ee5978eaada41838421c6b12a87cbb.jpg", status: "Backlog", hours: "6h", rating: "10" },
  { id: 3, name: "Aperture Desk Job", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1902490/library_600x900_2x.jpg", status: "Dropped", hours: "0h", rating: "10" },
  { id: 4, name: "Hogwarts Legacy", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/library_600x900_2x.jpg", status: "Backlog", hours: "0h", rating: "10" },
  { id: 5, name: "Uncharted 4: A Thief's End", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/library_600x900_2x.jpg", status: "Backlog", hours: "0h", rating: "10" },
  { id: 6, name: "Elden Ring", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/library_600x900_2x.jpg", status: "Backlog", hours: "0h", rating: "10" },
  { id: 7, name: "Raft", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/648800/library_600x900_2x.jpg", status: "Backlog", hours: "0h", rating: "10" },
  { id: 8, name: "Red Dead Redemption 2", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900_2x.jpg", status: "Backlog", hours: "0h", rating: "10" },
  { id: 9, name: "Grand Theft Auto V", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/library_600x900_2x.jpg", status: "Backlog", hours: "0h", rating: "10" },
  { id: 10, name: "Sons of the Forest", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1326420/library_600x900_2x.jpg", status: "Playing", hours: "0h", rating: "10" },
  { id: 11, name: "Uncharted: Legacy of Thieves", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/library_600x900_2x.jpg", status: "Backlog", hours: "0h", rating: "10" },
  { id: 12, name: "Marvel's Spider-Man 2", image: "https://media.rawg.io/media/games/69c/69c6f2df6007ec17cf7b313d42e03233.jpg", status: "Playing", hours: "0h", rating: "10" }
];

  

  const FilterdVault = vaultFilter === "all"
  ? vaultGames
  : vaultGames.filter((game)=> game.status.toLowerCase() == vaultFilter);

  return (
    <div className='flex-1 h-full flex flex-col rounded-3xl gap-4 overflow-y-auto scroll-smooth overflow-x-hidden scrollbar-hide'>
      <Hero />
      
      <div className='flex flex-col shrink-0 w-full'>
        <div className='flex items-center justify-between group px-2'>
          <FeaturedHeading heading={"Discover Deals"}/>
          <div className='bg-[#18181b]/30 rounded-lg flex gap-1 p-1 border-white/5 border'>
            <FilterButtons2 isActive={true} label={"Deals"} />
            <FilterButtons2 isActive={false} label={"Top rated"}/>
            <FilterButtons2 isActive={false} label={"Trending"}/>
          </div>
        </div>

        <div className='flex gap-4 overflow-x-auto snap-x scrollbar-hide pb-6 w-full px-2 py-6'>
          {discoverGames.map((game)=>{
            return <GameCard 
              key={game.id}
              name={game.name} 
              image={game.image}
              rating={game.rating}
            />
          })}
        </div>
        
      </div>

      <div className='flex flex-col shrink-0 w-full'>
        <div className='flex items-center justify-between group px-2'>
          <FeaturedHeading heading={"My vault"}/>
          <div className='bg-[#18181b]/30 rounded-lg flex gap-1 p-1 border-white/5 border'>
            <FilterButtons2 isActive={vaultFilter === "all" } label={"all"} onSelect={()=> setVaultFilter("all")}/>
            <FilterButtons2 isActive={vaultFilter === "playing" } label={"playing"} onSelect={()=> setVaultFilter("playing")}/>
            <FilterButtons2 isActive={vaultFilter === "completed" } label={"completed"} onSelect={()=> setVaultFilter("completed")}/>
            <FilterButtons2 isActive={vaultFilter === "dropped" } label={"dropped"} onSelect={()=> setVaultFilter("dropped")}/>
          </div>
        </div>

        <div className='Library-grid gap-6 px-2 py-6'>
          {
          FilterdVault.map((game)=>{
            return <LongGameCard 
                id={game.id}
                name={game.name}
                image={game.image}
                status={game.status}
                rating={game.rating}
                hours={game.hours}
              />
          })}
        </div>
      </div>


    </div>
  )
}

export default MainContent
