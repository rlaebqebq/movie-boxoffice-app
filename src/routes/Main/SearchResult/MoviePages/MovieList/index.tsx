import loadable from '@loadable/component'
import MovieCard from 'components/MovieCard'
import { IMovieList } from 'types'
import styles from './movieList.module.scss'

interface IProps {
  data: IMovieList[]
}

const MovieList = ({ data }: IProps) => {
  return (
    <ul>
      {data.map((item, movieIndex) => (
        <MovieCard key={item.movieCd} item={item} hasRank={false} />
      ))}
    </ul>
  )
}

export default MovieList
