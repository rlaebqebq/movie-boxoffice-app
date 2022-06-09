import { IMovieInfo } from 'types/movieInfo'
import styles from './movieinfo.module.scss'

interface Props {
  data?: IMovieInfo
}

const MovieinfoList = ({ data }: Props) => {
  if (!data) return null

  return (
    <>
      <div className={styles.title}>
        <h2>{data.movieNm !== undefined && data.movieNm}</h2>
        <h3>{data.movieNmEn !== undefined && data.movieNmEn}</h3>
      </div>
      <div className={styles.tagWrapper}>
        {data.genres.map((item, index) => {
          const key = `genreNm-${item}-${index}`
          return (
            <p key={key} className={styles.primaryBox}>
              {item.genreNm !== (undefined || null) && item.genreNm}
            </p>
          )
        })}
        <p className={styles.primaryBox}>{data.typeNm}</p>
        <p className={styles.primaryBox}>{data.showTm !== (undefined || null) && `${data.showTm}분`}</p>
        {data.audits.map((item, index) => {
          const key = `watchGradeNm-${item}-${index}`
          return (
            <p key={key} className={styles.primaryBox}>
              {item.watchGradeNm !== (undefined || null) && item.watchGradeNm}
            </p>
          )
        })}
        {data.showTypes.map((item, index) => {
          const key = `showTypeNm-${item}-${index}`
          return (
            <p key={key} className={styles.primaryBox}>
              {item.showTypeNm !== (undefined || null) && item.showTypeNm}
            </p>
          )
        })}
        <p className={styles.primaryBox}>{data.openDt !== (undefined || null) && `개봉일${data.openDt}`}</p>
        {data.directors.map((item, index) => {
          const key = `directors-${item}-${index}`
          return <p key={key}>감독&nbsp;:&nbsp;{item.peopleNm !== (undefined || null) && item.peopleNm}</p>
        })}
        {data.actors.map((item, index) => {
          const key = `actors-${item}-${index}`
          return <p key={key}>출현&nbsp;:&nbsp;{item.peopleNm !== (undefined || null) && item.peopleNm}</p>
        })}
        {data.companys.map((item, index) => {
          const key = `company-${item}-${index}`
          return (
            <p key={key}>
              {item.companyPartNm !== (undefined || null) && item.companyPartNm}
              &nbsp;:&nbsp;
              {item.companyNm !== (undefined || null) && item.companyNm}
            </p>
          )
        })}
      </div>
    </>
  )
}

export default MovieinfoList
