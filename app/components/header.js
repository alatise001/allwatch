import Image from 'next/image'

export default function Header() {
    const widthHeight = 16
    return (
        <header>
            <Image
                src={"/assets/movie Svg.svg"}
                width={widthHeight}
                height={widthHeight}
                alt='movie icon'
            />

            <div className='header-inner-div'>
                <Image
                    src={"/assets/icon-nav-home.svg"}
                    width={widthHeight}
                    height={widthHeight}
                    alt='movie icon'
                />

                <Image
                    src={"/assets/icon-nav-movies.svg"}
                    width={widthHeight}
                    height={widthHeight}
                    alt='movie icon'
                />

                <Image
                    src={"/assets/icon-nav-tv-series.svg"}
                    width={widthHeight}
                    height={widthHeight}
                    alt='movie icon'
                />

                <Image
                    src={"/assets/icon-nav-bookmark.svg"}
                    width={widthHeight}
                    height={widthHeight}
                    alt='movie icon'
                />
            </div>

            <Image
                src={"/assets/image-avatar.png"}
                width={widthHeight}
                height={widthHeight}
                alt='movie icon'
            />
        </header>
    )
}
