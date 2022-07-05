import cx from 'classnames'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { useRecoilState, useRecoilValue } from 'hooks/state'
import { useSearchDetailQuery, useTmdbSearchQuery } from 'hooks/query'
import {
  targetBackdropLinkState,
  targetMovieCdState,
  targetMovieNmState,
  targetMovieNmEnState,
  targetMovieOpenDtState,
  targetPosterLinkState,
  todayDtState,
  bookMarkList,
} from 'states'
import { delBookmark, addBookmark, isBookmarked } from 'utils/localStorage'
import CalcWeek from 'utils/calcWeek'

import { InfoCompany, InfoTitle, InfoGenre, InfoPlot, InfoTags } from './Movieinfo'
import BoxofficeRecord from './BoxofficeRecord'

import emptyPoster from 'assets/emptyPoster.png'
import { CloseIcon, BookmarkIcon } from 'assets/svg'
import styles from './movieDetail.module.scss'

const MovieDetail = () => {
  const [isBookmark, setIsBookmark] = useState(false)
  const [bookmarkList, setBookmarkList] = useRecoilState(bookMarkList)
  const [backdropLink, setBackdropLink] = useRecoilState(targetBackdropLinkState)
  const [posterLink, setPosterLink] = useRecoilState(targetPosterLinkState)
  const [movieNmEn, setMovieNmEn] = useRecoilState(targetMovieNmEnState)

  const movieCd = useRecoilValue(targetMovieCdState)
  const movieNm = useRecoilValue(targetMovieNmState)
  const movieOpenDt = useRecoilValue(targetMovieOpenDtState)
  const todayDt = useRecoilValue(todayDtState)

  const openDt = movieOpenDt.format('YYYYMMDD')

  const infoData = useSearchDetailQuery(movieCd).data?.movieInfoResult.movieInfo
  const tmdbData = useTmdbSearchQuery(String(infoData?.movieNmEn), Number(openDt.substring(0, 4)))

  const navigate = useNavigate()
  const hasData = tmdbData.data?.total_results !== 0
  const dateGap = todayDt.diff(movieOpenDt, 'day')
  const weekRecord = CalcWeek({ todayDt, movieOpenDt, dateGap })

  const goBack = () => {
    navigate(-1)
  }

  const onClickHandler = () => {
    setBookmarkList(
      isBookmark ? delBookmark(movieCd) : addBookmark({ movieNm, movieNmEn, openDt, movieCd, backdropLink })
    )
  }

  useEffect(() => {
    const checkHasImage = (sourceLink: string) => {
      if (openDt.length > 0) return `https://image.tmdb.org/t/p/w500${sourceLink}`
      return emptyPoster
    }
    setMovieNmEn(String(infoData?.movieNmEn))
    setPosterLink(hasData ? checkHasImage(String(tmdbData.data?.results[0].poster_path)) : emptyPoster)
    setBackdropLink(hasData ? checkHasImage(String(tmdbData.data?.results[0].backdrop_path)) : '')
    setIsBookmark(isBookmarked(movieCd))
  }, [
    hasData,
    movieCd,
    bookmarkList,
    tmdbData.data?.results,
    infoData?.movieNmEn,
    openDt.length,
    setBackdropLink,
    setPosterLink,
    setMovieNmEn,
  ])

  return (
    <div className={styles.wrapper}>
      <button type='button' onClick={goBack} className={styles.closeIcon}>
        <CloseIcon />
      </button>
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
          {dateGap > 0 && weekRecord.length > 0 && <BoxofficeRecord data={weekRecord} />}
          <div className={styles.companyWrapper}>
            <InfoCompany data={infoData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
