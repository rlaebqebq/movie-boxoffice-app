import { useEffect, MouseEvent } from 'react'

import loadable from '@loadable/component'
import { useSearchMovieQuery } from 'hooks/query'
import { useInView } from 'react-intersection-observer'
import { NavLink, useSearchParams } from 'react-router-dom'

import MoviePages from './MoviePages'
import styles from './search.module.scss'
import MovieList from './MoviePages/MovieList'
import { CloseIcon } from 'assets/svg'
import { useRecoil } from 'hooks/state'
import { showResultState } from 'states/toggle'

const NotFoundList = loadable(() => import('./NotFoundList'))
const LoadingPage = loadable(() => import('components/LoadingModal'))

const Search = () => {
  const { ref, inView } = useInView()
  const [searchParams] = useSearchParams()
  const [showResult, setShowResult] = useRecoil(showResultState)
  const movieNm = searchParams.get('movieNm') || ''

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching, isLoading } = useSearchMovieQuery(movieNm)

  const showFetchRef = hasNextPage && !isFetchingNextPage && data && !isFetching && !isLoading

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [fetchNextPage, inView])

  const handleClose = () => {
    setShowResult(false)
  }

  return (
    <div className={styles.pageWrapper}>
      <NavLink to='/' className={styles.closeIcon} onClick={handleClose}>
        <CloseIcon />
      </NavLink>
      <LoadingPage isLoading={isLoading || isFetching} />
      {data?.pages.map((moviePage, index) => {
        const key = `${moviePage.totalCnt}-${index}`
        return <MovieList key={key} data={moviePage.data.movieListResult.movieList} />
      })}
      <NotFoundList inView={!data || !movieNm} />
      {showFetchRef && <div ref={ref} />}
    </div>
  )
}

export default Search
