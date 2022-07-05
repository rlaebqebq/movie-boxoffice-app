import MovieCard from 'components/MovieCard'
import { ICommonBoxOfficeResult } from 'types'

import styles from '../boxoffice.module.scss'

interface IProps {
  data?: ICommonBoxOfficeResult
}

const BoxofficeList = ({ data }: IProps) => {
  return (
    <ul className={styles.overflowWrapper}>
      {data?.dailyBoxOfficeList?.map((item) => (
        <MovieCard key={item.movieCd} item={item} hasRank movieDetail />
      ))}
    </ul>
  )
}

export default BoxofficeList
