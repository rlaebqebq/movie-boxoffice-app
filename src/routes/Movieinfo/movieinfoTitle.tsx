import { IMovieInfo } from 'types/movieInfo'
import styles from './movieinfo.module.scss'

interface Props {
  data?: IMovieInfo
}

const MovieinfoList = ({ data }: Props) => {
  if (!data) return null

  return (
    <div className={styles.title}>
      <h2>{data.movieNm !== undefined && data.movieNm}</h2>
      <h3>{data.movieNmEn !== undefined && data.movieNmEn}</h3>
    </div>
  )
}

export default MovieinfoList
