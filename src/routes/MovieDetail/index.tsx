import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'

import { Loading } from 'components'
import { useRecoilState, useRecoilValue } from 'hooks/state'
import { useSearchDetailQuery, useTmdbSearchQuery } from 'hooks/query'
import {
  targetBackdropLinkState,
  targetMovieCdState,
  targetMovieNmState,
  targetMovieOpenDtState,
  targetPosterLinkState,
  todayDtState,
  bookMarkList,
} from 'states'
import { delBookmark, addBookmark, isBookmarked } from 'utils/localStorage'
import CalcWeek from 'utils/calcWeek'

import { InfoCompany, InfoTitle, InfoGenre, InfoPlot } from './Movieinfo'

import emptyPoster from 'assets/emptyPoster.png'
import { CloseIcon, BookmarkIcon } from 'assets/svg'
import styles from './movieDetail.module.scss'

const InfoTags = lazy(() => import('./Movieinfo/infoTags'))
const BoxofficeRecord = lazy(() => import('./BoxofficeRecord'))

const MovieDetail = () => {
  const [isBookmark, setIsBookmark] = useState(false)
  const [bookmarkList, setBookmarkList] = useRecoilState(bookMarkList)
  const [backdropLink, setBackdropLink] = useRecoilState(targetBackdropLinkState)
  const [posterLink, setPosterLink] = useRecoilState(targetPosterLinkState)

  const movieCd = useRecoilValue(targetMovieCdState)
  const movieNm = useRecoilValue(targetMovieNmState)
  const movieOpenDt = useRecoilValue(targetMovieOpenDtState)
  const todayDt = useRecoilValue(todayDtState)

  const openDt = movieOpenDt.format('YYYYMMDD')

  const infoData = useSearchDetailQuery(movieCd).data?.movieInfoResult.movieInfo
  const tmdbData = useTmdbSearchQuery(String(infoData?.movieNmEn), Number(openDt.substring(0, 4)))

  const hasData = tmdbData.data?.total_results !== 0
  const dateGap = todayDt.diff(movieOpenDt, 'day')
  const weekRecord = CalcWeek({ todayDt, movieOpenDt, dateGap })

  const onClickHandler = () => {
    setBookmarkList(isBookmark ? delBookmark(movieCd) : addBookmark({ movieNm, openDt, movieCd, backdropLink }))
  }

  const checkHasImage = (sourceLink: string) => {
    return `https://image.tmdb.org/t/p/w500${sourceLink}`
  }
  useEffect(() => {
    setPosterLink(hasData ? checkHasImage(String(tmdbData.data?.results[0].poster_path)) : emptyPoster)
    setBackdropLink(hasData ? checkHasImage(String(tmdbData.data?.results[0].backdrop_path)) : '')
    setIsBookmark(isBookmarked(movieCd))
  }, [hasData, movieCd, bookmarkList, setBackdropLink, setPosterLink, tmdbData.data?.results])

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.wrapper}>
        <NavLink to='/' className={styles.closeIcon}>
          <CloseIcon />
        </NavLink>
        <div className={cx(styles.infoWrapper)} style={{ backgroundImage: `url(${posterLink})` }}>
          <div className={styles.title}>
            <button
              onClick={onClickHandler}
              type='button'
              className={cx(styles.bookmark, { [styles.bookmarkChecked]: isBookmark })}
            >
              <BookmarkIcon />
            </button>
            <InfoTitle data={infoData} />
          </div>
          <div className={styles.innerWrapper}>
            <div className={styles.tagWrapper}>
              <InfoTags data={infoData} />
              {hasData && <InfoGenre dataKR={infoData?.genres} dataEN={tmdbData.data?.results[0].genre_ids} />}
            </div>
            {hasData && <InfoPlot data={tmdbData.data?.results[0].overview} />}
            {dateGap > 0 && <BoxofficeRecord data={weekRecord} />}
            <div className={styles.companyWrapper}>
              <InfoCompany data={infoData} />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default MovieDetail
