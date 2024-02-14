import Image from 'next/image'

export default function Components() {
  const widthHeight = 16
  return (
    <div className='components'>
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

      <div className='inner-container gap'>

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

        <div className='trending' >

          <div className='trending-img-div' style={{
            backgroundImage: "url(/assets/thumbnails/beyond-earth/trending/small.jpg)"
          }}>
            {/* <Image
              src={"/assets/thumbnails/beyond-earth/trending/small.jpg"}
              width={240}
              height={140}
              alt='movie icon'
              className='trending-img'
            /> */}

            <span className='movie-info-div'>
              <div className='movie-info-div-2'>
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
              <h3 className='trending-title'>Beyond Earth</h3>
            </span>

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

          <div className='trending-img-div' style={{
            backgroundImage: "url(/assets/thumbnails/beyond-earth/trending/small.jpg)"
          }}>
            {/* <Image
              src={"/assets/thumbnails/beyond-earth/trending/small.jpg"}
              width={240}
              height={140}
              alt='movie icon'
              className='trending-img'
            /> */}

            <span className='movie-info-div'>
              <div className='movie-info-div-2'>
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
              <h3 className='trending-title'>Beyond Earth</h3>
            </span>

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

          <div className='trending-img-div' style={{
            backgroundImage: "url(/assets/thumbnails/beyond-earth/trending/small.jpg)"
          }}>
            {/* <Image
              src={"/assets/thumbnails/beyond-earth/trending/small.jpg"}
              width={240}
              height={140}
              alt='movie icon'
              className='trending-img'
            /> */}

            <span className='movie-info-div'>
              <div className='movie-info-div-2'>
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
              <h3 className='trending-title'>Beyond Earth</h3>
            </span>

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

          <div className='trending-img-div' style={{
            backgroundImage: "url(/assets/thumbnails/beyond-earth/trending/small.jpg)"
          }}>
            {/* <Image
              src={"/assets/thumbnails/beyond-earth/trending/small.jpg"}
              width={240}
              height={140}
              alt='movie icon'
              className='trending-img'
            /> */}

            <span className='movie-info-div'>
              <div className='movie-info-div-2'>
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
              <h3 className='trending-title'>Beyond Earth</h3>
            </span>

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

          <div className='trending-img-div' style={{
            backgroundImage: "url(/assets/thumbnails/beyond-earth/trending/small.jpg)"
          }}>
            {/* <Image
              src={"/assets/thumbnails/beyond-earth/trending/small.jpg"}
              width={240}
              height={140}
              alt='movie icon'
              className='trending-img'
            /> */}

            <span className='movie-info-div'>
              <div className='movie-info-div-2'>
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
              <h3 className='trending-title'>Beyond Earth</h3>
            </span>

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

        </div>

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




      </div>
    </div>
  )
}
