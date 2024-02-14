import Image from 'next/image'


import { Outfit } from 'next/font/google'

import Trending from './components/trending'
import SearchBar from './components/searchbar'
import Group from './components/group'

const outfit = Outfit({ subsets: ['latin'] })


export default function Home() {

  return (
    <main className='main' >
      <SearchBar />
      <div className='trending-home-div'>
        <h2 className='trending-home-header'>Trending</h2>
        <div className='trending'>
          <Trending />
          <Trending />
          <Trending />
          <Trending />
        </div>
      </div>

      <div className='gap'>
        <h2 className='trending-home-header' >
          Recommended for you
        </h2>
        <div className='recommeneded-div'>
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />

        </div>
      </div>

    </main>
  )
}
