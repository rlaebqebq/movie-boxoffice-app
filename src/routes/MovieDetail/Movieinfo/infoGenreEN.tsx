import styles from '../movieDetail.module.scss'
import cx from 'classnames'
import { genreDict, IGenreDict } from './genreDict'

interface Props {
  data?: number[]
}

const InfoGenreEN = ({ data }: Props) => {
  if (!data) return null

  return (
    <>
      {data.map((item, index) => {
        const key = `company-${item}-${index}`
        return (
          <p key={key} className={cx(styles.primaryTag, styles.basicTag)}>
            {genreDict[item as keyof IGenreDict]}
          </p>
        )
      })}
    </>
  )
}

export default InfoGenreEN
