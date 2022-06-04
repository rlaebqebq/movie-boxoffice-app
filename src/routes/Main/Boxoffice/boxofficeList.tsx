import dayjs from 'dayjs'
import { useRecoilState } from 'recoil'
import { MouseEvent } from 'react'

import { IGetBoxofficeAPIRes } from 'types/boxoffice'
import { targetDtState } from 'states/movie'
import { ArrowleftIcon, ArrowrightIcon } from 'assets/svg'

import styles from './boxoffice.module.scss'

interface Props {
  data?: IGetBoxofficeAPIRes
}

const BoxofficeList = ({ data }: Props) => {
  const [sundayDt, setSundayDt] = useRecoilState(targetDtState)

  if (!data) return null

  const onClickSearch = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value)
  }

  const handlePrevWeek = () => {
    setSundayDt(sundayDt.subtract(7, 'day'))
  }
  const handleNextWeek = () => {
    if (dayjs().diff(sundayDt, 'day') > 6) setSundayDt(sundayDt.add(7, 'day'))
  }

  return (
    <>
      <div className={styles.title}>
        <h1>{data.boxOfficeResult.boxofficeType}</h1>
        <div className={styles.innerWrapper}>
          <button type='button' className={styles.prevButton} onClick={handlePrevWeek}>
            <ArrowleftIcon />
          </button>
          <h2>{data.boxOfficeResult.showRange}</h2>
          <button type='button' className={styles.nextButton} onClick={handleNextWeek}>
            <ArrowrightIcon />
          </button>
        </div>
      </div>

      <div className={styles.movieWrapper}>
        <ul>
          {data.boxOfficeResult.weeklyBoxOfficeList.map((item) => (
            <li key={item.rank}>
              <button className={styles.innerWrapper} value={item.movieCd} type='button' onClick={onClickSearch}>
                <dl className={styles.rank}>
                  <dt>{item.rank}</dt>
                  <dd>{item.rankInten}</dd>
                </dl>
                <dl className={styles.info}>
                  <dt>{item.movieNm}</dt>
                  <dd>{item.openDt}</dd>
                </dl>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default BoxofficeList
