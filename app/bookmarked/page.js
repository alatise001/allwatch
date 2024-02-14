import Image from 'next/image'


import { Outfit } from 'next/font/google'
import Group from '../components/group'

const outfit = Outfit({ subsets: ['latin'] })

export default function Movies() {
  return (
    <>
      <main className='main' >

        <div className='gap'>
          <h2 className='trending-home-header' >
            Bookmarked Movies
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
    </>
  )
}
