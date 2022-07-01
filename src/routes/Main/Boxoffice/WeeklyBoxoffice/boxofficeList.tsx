import styles from '../boxoffice.module.scss'
import MovieCard from 'components/MovieCard'
import { ICommonBoxOfficeResult } from 'types/commonBoxoffice'

interface IProps {
  data?: ICommonBoxOfficeResult
}

const BoxofficeList = ({ data }: IProps) => {
  return (
    <ul className={styles.overflowWrapper}>
      {data?.weeklyBoxOfficeList?.map((item) => (
        <MovieCard key={item.movieCd} item={item} hasRank movieDetail />
      ))}
    </ul>
  )
}

export default BoxofficeList
