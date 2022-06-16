import styles from '../movieinfo.module.scss'
import cx from 'classnames'
import { genreDict, IGenreDict } from './genreDict'

interface Props {
  data?: number[]
}

const MovieinfoPosterTag = ({ data }: Props) => {
  if (!data) return null

  return (
    <>
      {data.map((item, index) => {
        const key = `company-${item}-${index}`
        return (
          <p key={key} className={cx(styles.tagWrapper, styles.primaryTag)}>
            {genreDict[item as keyof IGenreDict]}
          </p>
        )
      })}
    </>
  )
}

export default MovieinfoPosterTag
