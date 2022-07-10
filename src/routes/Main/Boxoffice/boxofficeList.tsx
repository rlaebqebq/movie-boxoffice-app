import MovieCard from 'components/MovieCard'
import { ICommonBoxOfficeResult } from 'types'

import styles from './boxoffice.module.scss'

interface IProps {
  data?: ICommonBoxOfficeResult
  inView: string
}

const BoxofficeList = ({ data, inView }: IProps) => {
  return (
    <ul className={styles.overflowWrapper}>
      {inView === 'daily' &&
        data?.dailyBoxOfficeList?.map((item) => <MovieCard key={item.movieCd} item={item} hasRank movieDetail />)}
      {inView === 'weekly' &&
        data?.weeklyBoxOfficeList?.map((item) => <MovieCard key={item.movieCd} item={item} hasRank movieDetail />)}
    </ul>
  )
}

export default BoxofficeList
