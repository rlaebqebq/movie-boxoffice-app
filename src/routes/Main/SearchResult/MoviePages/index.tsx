import { InfiniteData } from 'react-query'
import { IMoviesInfiniteResponse } from 'types/searchMovie'

import MovieList from './MovieList'

interface IProps {
  data?: InfiniteData<IMoviesInfiniteResponse>
}

const MoviePages = ({ data }: IProps) => {
  if (!data) return null
  return (
    <>
      {data.pages.map((moviePage, index) => {
        const key = `${moviePage.totCnt}-${index}`
        return <MovieList key={key} data={moviePage.movieList} />
      })}
    </>
  )
}

export default MoviePages
