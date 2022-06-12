import styles from '../movieinfo.module.scss'
import { Result } from 'types/moviePoster'
import cx from 'classnames'

interface Props {
  data?: Result
}

const MovieInfoPosterEtc = ({ data }: Props) => {
  return (
    <>
      <p className={cx(styles.tagWrapper, styles.primaryTag)}>{data?.type}</p>
      <p className={styles.plot}>{data?.plots.plot[0].plotText}</p>
    </>
  )
}

export default MovieInfoPosterEtc
