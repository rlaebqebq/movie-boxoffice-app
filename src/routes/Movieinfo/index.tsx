import cx from 'classnames'
import { useRecoilState, useRecoilValue } from 'recoil'
import { lazy, Suspense, useEffect, useState } from 'react'

import LoadingPage from 'components/LoadingPage'
import { BookmarkIcon } from 'assets/svg'
import { useSearchDetailQuery, useSearchPosterQuery } from 'hooks/movieQuery'
import { bookMarkList, targetMovieCdState, targetMovieNmState, targetMovieOpenDtState } from 'states/movie'
import { delBookmark, addBookmark, isBookmarked } from 'utils/localStorage'

import MovieinfoCompany from './MovieinfoDetail/movieinfoCompany'
import MovieinfoTitle from './MovieinfoDetail/movieinfoTitle'
import MovieInfoPosterTag from './MovieInfoPoster/movieinfoPosterTag'
import MovieInfoPosterPlot from './MovieInfoPoster/movieinfoPosterEtc'
import styles from './movieinfo.module.scss'

const MovieinfoList = lazy(() => import('./MovieinfoDetail/movieinfoList'))
const BoxofficeRecord = lazy(() => import('./BoxofficeRecord'))

const MovieInfo = () => {
  const movieCd = useRecoilValue(targetMovieCdState)
  const title = useRecoilValue(targetMovieNmState)
  const releaseDts = useRecoilValue(targetMovieOpenDtState)

  const infoData = useSearchDetailQuery(movieCd).data?.movieInfoResult.movieInfo
  const posterData = useSearchPosterQuery(title, releaseDts.format('YYYYMMDD')).data?.Data[0].Result[0]

  const checkMovieCd = () => {
    if (posterData?.CommCodes.CommCode[0].CodeNo && movieCd) return true
    return false
  }
  const imgUrl = posterData?.posters.split('|')[0]

  const [isBookmark, setIsBookmark] = useState(false)
  const [bookmarkList, setBookmarkList] = useRecoilState(bookMarkList)

  const onClickHandler = () => {
    setBookmarkList(isBookmark ? delBookmark(movieCd) : addBookmark({ title, openDt, movieCd }))
  }
  useEffect(() => {
    setIsBookmark(isBookmarked(movieCd))
  }, [bookmarkList, movieCd])

  const openDt = releaseDts.format('YYYYMMDD')

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className={styles.pageWrapper} style={{ backgroundImage: `url(${imgUrl})` }}>
        <div className={styles.infoWrapper}>
          <div className={styles.title}>
            <div className={styles.titleWrapper}>
              <button
                onClick={onClickHandler}
                type='button'
                className={cx(styles.bookmark, { [styles.bookmarkChecked]: isBookmark })}
              >
                <BookmarkIcon />
              </button>
              <MovieinfoTitle data={infoData} />
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.innerWrapper}>
              <div className={styles.largeWrapper}>
                <MovieinfoList data={infoData} />
                {checkMovieCd() && <MovieInfoPosterTag data={posterData} />}
              </div>
              {checkMovieCd() && <MovieInfoPosterPlot data={posterData} />}
              <BoxofficeRecord />
              <MovieinfoCompany data={infoData} />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default MovieInfo
