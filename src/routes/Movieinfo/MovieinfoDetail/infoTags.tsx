import cx from 'classnames'
import { IMovieInfo } from 'types/movieInfo'
import styles from '../movieinfo.module.scss'

interface Props {
  data?: IMovieInfo
}

const InfoTags = ({ data }: Props) => {
  if (!data) return null

  return (
    <>
      {data.audits.map((item, index) => {
        const key = `watchGradeNm-${item}-${index}`
        return (
          <p key={key} className={styles.tagWrapper}>
            {item.watchGradeNm !== (undefined || null) && item.watchGradeNm}
          </p>
        )
      })}
      <p className={styles.tagWrapper}>{data.showTm !== (undefined || null) && `${data.showTm}분`}</p>
      {data.nations.map((item, index) => {
        const key = `nations-${item}-${index}`
        return (
          <p key={key} className={cx(styles.tagWrapper, styles.primaryTag)}>
            {item.nationNm !== (undefined || null) && item.nationNm}
          </p>
        )
      })}
      <p className={cx(styles.tagWrapper, styles.primaryTag)}>{data.typeNm}</p>
    </>
  )
}

export default InfoTags
