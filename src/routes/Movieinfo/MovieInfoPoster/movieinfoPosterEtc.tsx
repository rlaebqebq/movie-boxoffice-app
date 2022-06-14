import styles from '../movieinfo.module.scss'

interface Props {
  data?: string
}

const MovieInfoPosterPlot = ({ data }: Props) => {
  return <p className={styles.plot}>{data}</p>
}

export default MovieInfoPosterPlot
