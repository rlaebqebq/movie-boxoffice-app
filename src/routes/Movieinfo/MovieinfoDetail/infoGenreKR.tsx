import cx from 'classnames'
import styles from '../movieinfo.module.scss'

interface Props {
  data?: IMovieInfo
}

const InfoGenreKR = ({ data }: Props) => {
  if (!data) return null

  return (
    <>
      {data.genres.map((item, index) => {
        const key = `genreNm-${item}-${index}`
        return (
          <p key={key} className={cx(styles.tagWrapper, styles.primaryTag)}>
            {item.genreNm !== (undefined || null) && item.genreNm}
          </p>
        )
      })}
    </>
  )
}

export default InfoGenreKR
