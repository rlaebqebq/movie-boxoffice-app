import cx from 'classnames'
import { useRecoilState, useRecoilValue } from 'recoil'
import { lazy, Suspense, useEffect, useState } from 'react'

import LoadingPage from 'components/LoadingPage'
import { BookmarkIcon } from 'assets/svg'
import { useSearchDetailQuery, useSearchPosterQuery } from 'hooks/movieQuery'
import {
  bookMarkList,
  targetMovieCdState,
  targetMovieNmState,
  targetMovieOpenDtState,
  todayDtState,
} from 'states/movie'
import { delBookmark, addBookmark, isBookmarked } from 'utils/localStorage'

import CalcWeek from './calcWeek'
import MovieinfoCompany from './MovieinfoDetail/movieinfoCompany'
import MovieinfoTitle from './MovieinfoDetail/movieinfoTitle'
import MovieInfoPosterTag from './MovieInfoPoster/movieinfoPosterTag'
import MovieInfoPosterPlot from './MovieInfoPoster/movieinfoPosterEtc'
import styles from './movieinfo.module.scss'

const MovieinfoList = lazy(() => import('./MovieinfoDetail/movieinfoList'))
const BoxofficeRecord = lazy(() => import('./BoxofficeRecord'))

const MovieInfo = () => {
  const [isBookmark, setIsBookmark] = useState(false)
  const [bookmarkList, setBookmarkList] = useRecoilState(bookMarkList)

  const movieCd = useRecoilValue(targetMovieCdState)
  const title = useRecoilValue(targetMovieNmState)
  const movieOpenDt = useRecoilValue(targetMovieOpenDtState)
  const todayDt = useRecoilValue(todayDtState)

  const infoData = useSearchDetailQuery(movieCd).data?.movieInfoResult.movieInfo
  const posterData = useSearchPosterQuery(title, movieOpenDt.format('YYYYMMDD'))

  const dateGap = todayDt.diff(movieOpenDt, 'day')
  const weekRecord = CalcWeek({ todayDt, movieOpenDt, dateGap })

  const onClickHandler = () => {
    const openDt = movieOpenDt.format('YYYYMMDD')
    setBookmarkList(isBookmark ? delBookmark(movieCd) : addBookmark({ title, openDt, movieCd }))
  }

  useEffect(() => {
    setIsBookmark(isBookmarked(movieCd))
  }, [bookmarkList, movieCd])

  const checkMovieCd = () => {
    if (posterData.data?.Data[0].Count !== 0) {
      if (posterData.data?.Data[0].Result[0].CommCodes.CommCode[0].CodeNo && movieCd) return true
    }
    return false
  }

  const imgUrl = checkMovieCd() ? posterData.data?.Data[0].Result[0].posters.split('|')[0] : 'none'

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className={styles.pageWrapper} style={{ backgroundImage: `url(${imgUrl})` }}>
        <div className={cx(styles.infoWrapper, { [styles.nobgWrapper]: !checkMovieCd() })}>
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
                {checkMovieCd() && <MovieInfoPosterTag data={posterData.data?.Data[0].Result[0]} />}
              </div>
              {checkMovieCd() && <MovieInfoPosterPlot data={posterData.data?.Data[0].Result[0]} />}
              {dateGap > 0 && <BoxofficeRecord data={weekRecord} />}
              <MovieinfoCompany data={infoData} />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default MovieInfo
