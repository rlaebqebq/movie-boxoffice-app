import dayjs from 'dayjs'
import { useRecoilState } from 'recoil'
import { MouseEvent } from 'react'
import { Link } from 'react-router-dom'

import { IBoxofficeAPIRes } from 'types/boxoffice'
import { todayDtState, targetMovieState } from 'states/movie'
import { ArrowleftIcon, ArrowrightIcon } from 'assets/svg'

import styles from './boxoffice.module.scss'

interface Props {
  data?: IBoxofficeAPIRes
}

const BoxofficeList = ({ data }: Props) => {
  const [todayDt, settodayDt] = useRecoilState(todayDtState)
  const [, setTargetMovie] = useRecoilState(targetMovieState)

  if (!data) return null

  const handleMovieTarget = (e: MouseEvent<HTMLButtonElement>) => {
    setTargetMovie(e.currentTarget.value)
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
        <h1>{data.boxOfficeResult.boxofficeType}</h1>
        <div className={styles.innerWrapper}>
          <button type='button' className={styles.prevButton} onClick={handlePrevWeek}>
            <ArrowleftIcon />
          </button>
          <h2>{data.boxOfficeResult.showRange.substring(0, 8)}</h2>
          <button type='button' className={styles.nextButton} onClick={handleNextWeek}>
            <ArrowrightIcon />
          </button>
        </div>
      </div>

      <div className={styles.movieWrapper}>
        <ul>
          {data.boxOfficeResult.dailyBoxOfficeList.map((item) => (
            <li key={item.rank}>
              <Link to='/movieinfo'>
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
