import { IMovieInfo } from 'types/movieInfo'
import styles from '../movieinfo.module.scss'
import cx from 'classnames'

interface Props {
  data?: IMovieInfo
}

const MovieinfoList = ({ data }: Props) => {
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
      <p className={cx(styles.tagWrapper, styles.primaryTag)}>{data.typeNm}</p>
      {data.nations.map((item, index) => {
        const key = `nations-${item}-${index}`
        return (
          <p key={key} className={cx(styles.tagWrapper, styles.primaryTag)}>
            {item.nationNm !== (undefined || null) && item.nationNm}
          </p>
        )
      })}
    </>
  )
}

export default MovieinfoList
