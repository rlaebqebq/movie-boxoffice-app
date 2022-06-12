import { Result } from 'types/moviePoster'
import styles from '../movieinfo.module.scss'
import cx from 'classnames'

interface Props {
  data?: Result
}

const MovieInfoPoster = ({ data }: Props) => {
  const imgUrl = data?.posters.split('|')[0]
  // return <img className={styles.posterWrapper} src={data?.posters.split('|')[0]} alt={`poster-${data?.title}`} />
  return <div className={styles.bgWrapper} style={{ backgroundImage: `url(${imgUrl})` }} />
}

export default MovieInfoPoster

/* <img src={data?.posters.split('|')[0]} alt={`poster-${data?.title}`} /> */
