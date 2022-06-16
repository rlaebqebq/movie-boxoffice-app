import cx from 'classnames'
import dayjs from 'dayjs'
import { MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'

import { ArrowleftIcon, ArrowrightIcon, BookmarkIcon } from 'assets/svg'
import { useRecoilState } from 'hooks/state'
import { todayDtState, targetMovieCdState, targetMovieOpenDtState, targetMovieNmState } from 'states/movie'
import { IBoxOfficeResult } from 'types/dailyBoxoffice'
import { isBookmarked } from 'utils/localStorage'

import styles from './boxoffice.module.scss'

interface Props {
  data?: IBoxOfficeResult
}

const BoxofficeList = ({ data }: Props) => {
  const [todayDt, settodayDt] = useRecoilState(todayDtState)
  const [, setTargetMovieCd] = useRecoilState(targetMovieCdState)
  const [, setTargetMovieOpenDt] = useRecoilState(targetMovieOpenDtState)
  const [, setTargetMovieNmState] = useRecoilState(targetMovieNmState)

  const handlePrevWeek = () => {
    settodayDt(todayDt.subtract(1, 'day'))
  }
  const handleNextWeek = () => {
    if (dayjs().diff(todayDt, 'day') > 1) settodayDt(todayDt.add(1, 'day'))
  }

  const handleMovieTarget = (e: MouseEvent<HTMLButtonElement>) => {
    const movieData = e.currentTarget.value.split('/')
    setTargetMovieOpenDt(dayjs(dayjs(movieData[0], 'YYYY-MM-DD').toDate()))
    setTargetMovieCd(movieData[1])
    setTargetMovieNmState(movieData[2])
  }

  return (
    <>
      <div className={styles.title}>
        <h2>BOXOFFICE</h2>
        <div className={styles.innerWrapper}>
          <button type='button' className={styles.prevButton} onClick={handlePrevWeek} aria-label='이전 날짜'>
            <ArrowleftIcon />
          </button>
          <h3>{data?.showRange.substring(0, 8)}</h3>
          <button type='button' className={styles.nextButton} onClick={handleNextWeek} aria-label='다음 날짜'>
            <ArrowrightIcon />
          </button>
        </div>
      </div>

      <div className={styles.movieWrapper}>
        <ul>
          {data?.dailyBoxOfficeList.map((item) => (
            <li key={`${item.movieNm}-${item.rank}`}>
              <div className={cx(styles.bookmark, { [styles.bookmarkChecked]: isBookmarked(item.movieCd) })}>
                <BookmarkIcon />
              </div>
              <NavLink to='/movieinfo'>
                <button
                  className={styles.innerWrapper}
                  value={`${item.openDt}/${item.movieCd}/${item.movieNm}`}
                  type='button'
                  onClick={handleMovieTarget}
                >
                  <dl className={styles.rank}>
                    <dt>{item.rank}</dt>
                    <dd className={cx({ [styles.rankIntenPlus]: Number(item.rankInten) > 0 })}>{item.rankInten}</dd>
                  </dl>
                  <dl className={styles.info}>
                    <dt>{item.movieNm}</dt>
                    <dd>{item.openDt}</dd>
                  </dl>
                </button>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default BoxofficeList
