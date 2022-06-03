import styles from './boxoffice.module.scss'
import { MouseEvent } from 'react'
import { IGetBoxofficeAPIRes } from 'types/boxoffice'

interface Props {
  data?: IGetBoxofficeAPIRes
}

const BoxofficeList = ({ data }: Props) => {
  if (!data) return null
  const onClickSearch = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value)
  }
  return (
    <>
      <div className={styles.title}>
        <h1>{data.boxOfficeResult.boxofficeType}</h1>
        <h2>{data.boxOfficeResult.showRange}</h2>
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
