import { IDailyBoxOfficeResult } from 'types'

import styles from '../boxoffice.module.scss'
import MovieCard from 'components/MovieCard'
import { ICommonBoxOfficeResult } from 'types/commonBoxoffice'

interface IProps {
  // data?: IDailyBoxOfficeResult
  data?: ICommonBoxOfficeResult
}

const BoxofficeList = ({ data }: IProps) => {
  return (
    <ul className={styles.overflowWrapper}>
      {data?.dailyBoxOfficeList?.map((item) => (
        <MovieCard key={item.movieCd} item={item} hasRank />
      ))}
    </ul>
  )
}

export default BoxofficeList
