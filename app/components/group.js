import Image from 'next/image'

export default function Group() {
    const widthHeight = 16
    return (
        <div className='movie-category-div'>
            <div className='movie-img-div' style={{
                backgroundImage: "url(/assets/thumbnails/beyond-earth/trending/small.jpg)"
            }}>

                <div className='trending-bookmark-div'>
                    <Image
                        src={"/assets/icon-bookmark-empty.svg"}
                        width={12}
                        height={15}
                        alt='movie icon'
                        className='trending-bookmark'
                    />
                </div>

                <p className='trending-pg-div'>
                    PG
                </p>
            </div>

            <span className='movie-info-div-cate'>
                <div className='movie-info-div-2-cate'>
                    <p>2019</p>
                    <p>•</p>

                    <div className='movie-info-div-span'>
                        <Image
                            src={"/assets/icon-category-movie.svg"}
                            width={11}
                            height={11}
                            alt='movie icon'
                        />
                        <p>Movie</p>
                    </div>
                    <p>•</p>

                    <p>PG</p>

                </div>
                <h3 className='category-title'>Beyond Earth</h3>
            </span>
        </div>

    )
}
