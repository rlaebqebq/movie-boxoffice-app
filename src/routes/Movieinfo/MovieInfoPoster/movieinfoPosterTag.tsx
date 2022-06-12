import styles from '../movieinfo.module.scss'
import { Result } from 'types/moviePoster'
import cx from 'classnames'

interface Props {
  data?: Result
}

const MovieInfoPosterTag = ({ data }: Props) => {
  return <p className={cx(styles.tagWrapper, styles.primaryTag)}>{data?.type}</p>
}

export default MovieInfoPosterTag
