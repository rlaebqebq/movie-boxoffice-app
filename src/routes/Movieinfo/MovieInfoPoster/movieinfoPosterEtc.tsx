import styles from '../movieinfo.module.scss'
import { Result } from 'types/moviePoster'

interface Props {
  data?: Result
}

const MovieInfoPosterPlot = ({ data }: Props) => {
  return <p className={styles.plot}>{data?.plots.plot[0].plotText}</p>
}

export default MovieInfoPosterPlot
