import cx from 'classnames'
import { IGenre } from 'types/movieInfo'
import styles from '../movieDetail.module.scss'
import { genreDict, IGenreDict } from './genreDict'

interface Props {
  dataKR?: IGenre[]
  dataEN?: number[]
}

const InfoGenre = ({ dataKR, dataEN }: Props) => {
  if (!dataKR || !dataEN) return null

  const findDuplicate = () => {
    const genreList: string[] = []

    for (const item of dataEN) genreList.push(genreDict[item as keyof IGenreDict])
    for (const item of dataKR) {
      if (!genreList.includes(item.genreNm)) genreList.push(item.genreNm)
    }
    return genreList
  }
  return (
    <>
      {findDuplicate().map((item, index) => {
        const key = `genreNm-${item}-${index}`
        return (
          <p key={key} className={cx(styles.primaryTag, styles.basicTag)}>
            {item}
          </p>
        )
      })}
    </>
  )
}

export default InfoGenre
