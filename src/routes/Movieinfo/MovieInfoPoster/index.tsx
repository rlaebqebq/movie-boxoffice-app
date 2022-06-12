import { Result } from 'types/moviePoster'
import styles from '../movieinfo.module.scss'

interface Props {
  data?: Result
}

const MovieInfoPoster = ({ data }: Props) => {
  const imgUrl = data?.posters.split('|')[0]
  return <div className={styles.bgWrapper} style={{ backgroundImage: `url(${imgUrl})` }} />
}

export default MovieInfoPoster
