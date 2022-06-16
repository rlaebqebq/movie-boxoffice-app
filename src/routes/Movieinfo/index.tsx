import cx from 'classnames'
import { lazy, Suspense, useEffect, useState } from 'react'

import LoadingPage from 'components/LoadingPage'
import { useRecoil, useRecoilState, useRecoilValue } from 'hooks/state'
import { BookmarkIcon } from 'assets/svg'
import emptyPoster from 'assets/emptyPoster.png'
import { useSearchDetailQuery, useTmdbSearchQuery } from 'hooks/movieQuery'
import {
  bookMarkList,
  targetBackdropLinkState,
  targetMovieCdState,
  targetMovieNmState,
  targetMovieOpenDtState,
  targetPosterLinkState,
  todayDtState,
} from 'states/movie'
import { delBookmark, addBookmark, isBookmarked } from 'utils/localStorage'

import CalcWeek from './MovieinfoDetail/calcWeek'
import InfoCompany from './MovieinfoDetail/infoCompany'
import InfoTitle from './MovieinfoDetail/infoTitle'
import InfoGenreKR from './MovieinfoDetail/infoGenreKR'
import InfoGenreEN from './MovieinfoDetail/infoGenreEN'
import InfoPlot from './MovieinfoDetail/infoPlot'
import styles from './movieinfo.module.scss'

const InfoTags = lazy(() => import('./MovieinfoDetail/infoTags'))
const BoxofficeRecord = lazy(() => import('./BoxofficeRecord'))

const MovieInfo = () => {
  const [isBookmark, setIsBookmark] = useState(false)
  const [bookmarkList, setBookmarkList] = useRecoilState(bookMarkList)
  const movieCd = useRecoilValue(targetMovieCdState)
  const title = useRecoilValue(targetMovieNmState)
  const movieOpenDt = useRecoilValue(targetMovieOpenDtState)
  const todayDt = useRecoilValue(todayDtState)
  const [backdropLink, setBackdropLink] = useRecoil(targetBackdropLinkState)
  const [posterLink, setPosterLink] = useRecoil(targetPosterLinkState)

  const openDt = movieOpenDt.format('YYYYMMDD')

  const infoData = useSearchDetailQuery(movieCd).data?.movieInfoResult.movieInfo
  const tmdbData = useTmdbSearchQuery('ko', String(infoData?.movieNmEn), Number(openDt.substring(0, 4)))

  const hasData = tmdbData.data?.total_results !== 0
  const dateGap = todayDt.diff(movieOpenDt, 'day')
  const weekRecord = CalcWeek({ todayDt, movieOpenDt, dateGap })

  const onClickHandler = () => {
    setBookmarkList(isBookmark ? delBookmark(movieCd) : addBookmark({ title, openDt, movieCd, backdropLink }))
  }

  const checkHasImage = (sourceLink: string) => {
    return `https://image.tmdb.org/t/p/w500${sourceLink}`
  }
  useEffect(() => {
    setPosterLink(hasData ? checkHasImage(String(tmdbData.data?.results[0].poster_path)) : emptyPoster)
    setBackdropLink(hasData ? checkHasImage(String(tmdbData.data?.results[0].backdrop_path)) : '')
  }, [hasData, setBackdropLink, setPosterLink, tmdbData.data?.results])

  useEffect(() => {
    setIsBookmark(isBookmarked(movieCd))
  }, [bookmarkList, movieCd])

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className={styles.pageWrapper} style={{ backgroundImage: `url(${posterLink})` }}>
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
              <InfoTitle data={infoData} />
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.innerWrapper}>
              <div className={styles.largeWrapper}>
                <InfoTags data={infoData} />
                <InfoGenreKR data={infoData} />
                {hasData && <InfoGenreEN data={tmdbData.data?.results[0].genre_ids} />}
              </div>
              {hasData && <InfoPlot data={tmdbData.data?.results[0].overview} />}
              {dateGap > 0 && <BoxofficeRecord data={weekRecord} />}
              <InfoCompany data={infoData} />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default MovieInfo
