import { InfiniteData } from 'react-query'

import { IMoviesInfiniteResponse } from 'types'
import MovieList from '../MovieList'

interface IProps {
  data?: InfiniteData<IMoviesInfiniteResponse>
}

const MoviePages = ({ data }: IProps) => {
  if (!data) return null

  return (
    <>
      {data.pages.map((moviePage, index) => {
        const key = `${moviePage}-${index}`
        return <MovieList key={key} data={moviePage.data.movieListResult.movieList} />
      })}
    </>
  )
}

export default MoviePages
