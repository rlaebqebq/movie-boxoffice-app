import { IMovieSearchAPIRes } from 'types/movieInfo'
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
      <div className={styles.tagWrapper}>
        {data.movieInfoResult.movieInfo.genres.map((item, index) => {
          const key = `genreNm-${item}-${index}`
          return <p key={key}>{item.genreNm !== undefined && item.genreNm}</p>
        })}
        <p>{data.movieInfoResult.movieInfo.typeNm}</p>
        <p>{data.movieInfoResult.movieInfo.showTm}분</p>
        {data.movieInfoResult.movieInfo.audits.map((item, index) => {
          const key = `watchGradeNm-${item}-${index}`
          return <p key={key}>{item.watchGradeNm !== undefined && item.watchGradeNm}</p>
        })}
        {data.movieInfoResult.movieInfo.showTypes.map((item, index) => {
          const key = `showTypeNm-${item}-${index}`
          return <p key={key}>{item.showTypeNm !== undefined && item.showTypeNm}</p>
        })}
        <p>개봉일&nbsp;:&nbsp;{data.movieInfoResult.movieInfo.openDt}</p>
        {data.movieInfoResult.movieInfo.directors.map((item, index) => {
          const key = `directorNm-${item}-${index}`
          return <p key={key}>감독&nbsp;:&nbsp;{item.peopleNm !== undefined && item.peopleNm}</p>
        })}
        <p>
          출현&nbsp;:&nbsp;
          {data.movieInfoResult.movieInfo.actors[1].peopleNm !== (undefined || null) &&
            data.movieInfoResult.movieInfo.actors[1].peopleNm}
        </p>
      </div>
    </>
  )
}

export default MovieinfoList
