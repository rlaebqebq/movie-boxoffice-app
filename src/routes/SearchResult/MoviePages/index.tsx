import Loading from 'components/Loading'
import { lazy, Suspense } from 'react'
import { InfiniteData } from 'react-query'
import { IMoviesInfiniteResponse } from 'types/searchMovie'

// import MovieList from '../MovieList'
const MovieList = lazy(() => import('../MovieList'))

interface IProps {
  data?: InfiniteData<IMoviesInfiniteResponse>
}

const MoviePages = ({ data }: IProps) => {
  if (!data) return null

  return (
    <Suspense fallback={<Loading />}>
      {data.pages.map((moviePage, index) => {
        const key = `${moviePage}-${index}`
        return <MovieList key={key} data={moviePage.data.movieListResult.movieList} />
      })}
    </Suspense>
  )
}

export default MoviePages
