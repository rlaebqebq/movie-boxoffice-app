import dayjs from 'dayjs'
import { useRecoilState } from 'recoil'
import { MouseEvent } from 'react'
import { Link } from 'react-router-dom'

import { IBoxOfficeResult } from 'types/dailyBoxoffice'
import { todayDtState, targetMovieCdState, targetMovieOpenDtState } from 'states/movie'
import { ArrowleftIcon, ArrowrightIcon } from 'assets/svg'

import styles from './boxoffice.module.scss'

interface Props {
  data?: IBoxOfficeResult
}

const BoxofficeList = ({ data }: Props) => {
  const [todayDt, settodayDt] = useRecoilState(todayDtState)
  const [, setTargetMovieCd] = useRecoilState(targetMovieCdState)
  const [, setTargetMovieOpenDt] = useRecoilState(targetMovieOpenDtState)

  const handleMovieTarget = (e: MouseEvent<HTMLButtonElement>) => {
    const movieCd = e.currentTarget.value.substring(10)
    const movieOpenDt = e.currentTarget.value.substring(0, 10)
    setTargetMovieCd(movieCd)
    setTargetMovieOpenDt(dayjs(dayjs(movieOpenDt, 'YYYY-MM-DD').toDate()))
  }

  const handlePrevWeek = () => {
    settodayDt(todayDt.subtract(1, 'day'))
  }
  const handleNextWeek = () => {
    if (dayjs().diff(todayDt, 'day') > 1) settodayDt(todayDt.add(1, 'day'))
  }

  return (
    <>
      <div className={styles.title}>
        <h1>{data?.boxofficeType}</h1>
        <div className={styles.innerWrapper}>
          <button type='button' className={styles.prevButton} onClick={handlePrevWeek}>
            <ArrowleftIcon />
          </button>
          <h2>{data?.showRange.substring(0, 8)}</h2>
          <button type='button' className={styles.nextButton} onClick={handleNextWeek}>
            <ArrowrightIcon />
          </button>
        </div>
      </div>

      <div className={styles.movieWrapper}>
        <ul>
          {data?.dailyBoxOfficeList.map((item) => (
            <li key={`${item.movieNm}-${item.rank}`}>
              <Link to='/aboutmovie'>
                <button
                  className={styles.innerWrapper}
                  value={item.openDt + item.movieCd}
                  type='button'
                  onClick={handleMovieTarget}
                >
                  <dl className={styles.rank}>
                    <dt>{item.rank}</dt>
                    <dd>{item.rankInten}</dd>
                  </dl>
                  <dl className={styles.info}>
                    <dt>{item.movieNm}</dt>
                    <dd>{item.openDt}</dd>
                  </dl>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default BoxofficeList
