import { IMovieInfo } from 'types/movieInfo'
import styles from '../movieinfo.module.scss'
import cx from 'classnames'

interface Props {
  data?: IMovieInfo
}

const MovieinfoBasic = ({ data }: Props) => {
  if (!data) return null

  return (
    <>
      {data.audits.map((item, index) => {
        const key = `watchGradeNm-${item}-${index}`
        return (
          <p key={key} className={cx(styles.tagWrapper, styles.primaryTag)}>
            {item.watchGradeNm !== (undefined || null) && item.watchGradeNm}
          </p>
        )
      })}
      <p className={cx(styles.tagWrapper, styles.primaryTag)}>
        {data.showTm !== (undefined || null) && `${data.showTm}분`}
      </p>
    </>
  )
}

export default MovieinfoBasic
