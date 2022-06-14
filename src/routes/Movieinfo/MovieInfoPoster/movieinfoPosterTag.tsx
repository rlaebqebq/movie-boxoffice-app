import styles from '../movieinfo.module.scss'
import cx from 'classnames'

interface Props {
  data?: string
}

const MovieInfoPosterTag = ({ data }: Props) => {
  return <p className={cx(styles.tagWrapper, styles.primaryTag)}>{data}</p>
}

export default MovieInfoPosterTag
