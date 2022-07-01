import MovieCard from 'components/MovieCard'
import { IMovieList } from 'types'

interface IProps {
  data: IMovieList[]
}

const MovieList = ({ data }: IProps) => {
  return (
    <ul>
      {data.map((item) => (
        <MovieCard key={item.movieCd} item={item} hasRank={false} movieDetail={item.openDt.length > 0} />
      ))}
    </ul>
  )
}

export default MovieList
