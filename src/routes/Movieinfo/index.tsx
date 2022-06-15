import cx from 'classnames'
import { useRecoilState, useRecoilValue } from 'recoil'
import { lazy, Suspense, useEffect, useState } from 'react'

import LoadingPage from 'components/LoadingPage'
import { BookmarkIcon } from 'assets/svg'
import emptyPoster from 'assets/emptyPoster.png'
import { useSearchDetailQuery, useSearchPosterQuery, useTmdbSearchQuery } from 'hooks/movieQuery'
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
  const openDt = movieOpenDt.format('YYYYMMDD')

  const tmdbData = useTmdbSearchQuery('ko', String(infoData?.movieNmEn), Number(openDt.substring(0, 4)))

  console.log(tmdbData)

  // const hasData = posterData.data?.Data[0].TotalCount !== 0
  const hasData = tmdbData.data?.total_results !== 0
  const dateGap = todayDt.diff(movieOpenDt, 'day')
  const weekRecord = CalcWeek({ todayDt, movieOpenDt, dateGap })

  const onClickHandler = () => {
    setBookmarkList(isBookmark ? delBookmark(movieCd) : addBookmark({ title, openDt, movieCd }))
  }

  // const checkPosterNum = () => {
  //   if (posterData.data?.Data[0].Result[0].posters.includes('|')) {
  //     return posterData.data?.Data[0].Result[0].posters.split('|')[0]
  //   }
  //   return posterData.data?.Data[0].Result[0].posters
  // }

  const checkPosterNum = () => {
    return `https://image.tmdb.org/t/p/w500${tmdbData.data?.results[0].poster_path}`
  }
  const posterImg = hasData ? checkPosterNum() : emptyPoster

  useEffect(() => {
    setIsBookmark(isBookmarked(movieCd))
  }, [bookmarkList, movieCd])

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className={styles.pageWrapper} style={{ backgroundImage: `url(${posterImg})` }}>
        <div className={cx(styles.infoWrapper)}>
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
                {hasData && <MovieInfoPosterTag data={tmdbData.data?.results[0].genre_ids} />}
              </div>
              {hasData && <MovieInfoPosterPlot data={tmdbData.data?.results[0].overview} />}
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
