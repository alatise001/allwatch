import Image from 'next/image'

export default function SearchBar() {
    const widthHeight = 16
    return (
        <div className='search-div'>
            <Image
                src={"/assets/icon-search.svg"}
                width={24}
                height={24}
                alt='movie icon'
            />
            <form action="">
                <input className='searchinput' type="search" name="search" id="search" placeholder='Search for movies or TV series' />
            </form>
        </div>
    )
}
