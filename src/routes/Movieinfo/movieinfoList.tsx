import { IMovieSearchAPIRes } from 'types/movieInfo'
import BoxofficeGraph from 'routes/BoxofficeGraph'
import styles from './movieinfo.module.scss'

interface Props {
  data?: IMovieSearchAPIRes
}

const MovieinfoList = ({ data }: Props) => {
  if (!data) return null

  return (
    <>
      <div className={styles.title}>
        <h2>{data.movieInfoResult.movieInfo.movieNm !== undefined && data.movieInfoResult.movieInfo.movieNm}</h2>
        <h3>{data.movieInfoResult.movieInfo.movieNmEn !== undefined && data.movieInfoResult.movieInfo.movieNmEn}</h3>
      </div>
      <div className={styles.chartWrapper}>
        <BoxofficeGraph />
      </div>
      <div className={styles.tagWrapper}>
        {data.movieInfoResult.movieInfo.genres.map((item, index) => {
          const key = `genreNm-${item}-${index}`
          return (
            <p key={key} className={styles.primaryBox}>
              {item.genreNm !== (undefined || null) && item.genreNm}
            </p>
          )
        })}
        <p className={styles.primaryBox}>{data.movieInfoResult.movieInfo.typeNm}</p>
        <p className={styles.primaryBox}>
          {data.movieInfoResult.movieInfo.showTm !== (undefined || null) &&
            `${data.movieInfoResult.movieInfo.showTm}분`}
        </p>
        {data.movieInfoResult.movieInfo.audits.map((item, index) => {
          const key = `watchGradeNm-${item}-${index}`
          return (
            <p key={key} className={styles.primaryBox}>
              {item.watchGradeNm !== (undefined || null) && item.watchGradeNm}
            </p>
          )
        })}
        {data.movieInfoResult.movieInfo.showTypes.map((item, index) => {
          const key = `showTypeNm-${item}-${index}`
          return (
            <p key={key} className={styles.primaryBox}>
              {item.showTypeNm !== (undefined || null) && item.showTypeNm}
            </p>
          )
        })}
        <p className={styles.primaryBox}>
          {data.movieInfoResult.movieInfo.openDt !== (undefined || null) &&
            `개봉일${data.movieInfoResult.movieInfo.openDt}`}
        </p>
        {data.movieInfoResult.movieInfo.directors.map((item, index) => {
          const key = `directors-${item}-${index}`
          return <p key={key}>감독&nbsp;:&nbsp;{item.peopleNm !== (undefined || null) && item.peopleNm}</p>
        })}
        {data.movieInfoResult.movieInfo.actors.map((item, index) => {
          const key = `actors-${item}-${index}`
          return <p key={key}>출현&nbsp;:&nbsp;{item.peopleNm !== (undefined || null) && item.peopleNm}</p>
        })}
        {data.movieInfoResult.movieInfo.companys.map((item, index) => {
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
