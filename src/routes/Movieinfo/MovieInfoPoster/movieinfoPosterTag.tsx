import styles from '../movieinfo.module.scss'
import cx from 'classnames'

interface Props {
  data?: number[]
}

const MovieinfoPosterTag = ({ data }: Props) => {
  if (!data) return null
  const genreList = {
    '28': 'Action',
    '12': 'Adventure',
    '16': 'Animation',
    '35': 'Comedy',
    '80': 'Crime',
    '99': 'Documentary',
    '18': 'Drama',
    '10751 ': 'Family',
    '14': 'Fantasy',
    '36': 'History',
    '27': 'Horror',
    '10402 ': 'Music',
    '9648': 'Mystery',
    '10749': 'Romance',
    '878': 'ScienceFiction',
    '10770': 'TVMovie',
    '53': 'Thriller',
    '10752': 'War',
    '37': 'Western',
  }
  return (
    <>
      {data.map((item, index) => {
        const key = `company-${item}-${index}`
        return (
          <p key={key} className={cx(styles.tagWrapper, styles.primaryTag)}>
            {item}
          </p>
        )
      })}
    </>
  )
}

export default MovieinfoPosterTag
