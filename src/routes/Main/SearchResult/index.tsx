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
import { openSearchBarState, showResultState } from 'states/toggle'

const NotFoundList = loadable(() => import('./NotFoundList'))
const LoadingPage = loadable(() => import('components/LoadingModal'))

const Search = () => {
  const { ref, inView } = useInView()
  const [searchParams] = useSearchParams()
  const [showResult, setShowResult] = useRecoil(showResultState)
  const [openSearchBar, setopenSearchBar] = useRecoil(openSearchBarState)
  const movieNm = searchParams.get('movieNm') || ''

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching, isLoading } = useSearchMovieQuery(movieNm)

  const showFetchRef = hasNextPage && !isFetchingNextPage && data && !isFetching && !isLoading

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [fetchNextPage, inView])

  const handleClose = () => {
    setShowResult(false)
    setopenSearchBar(false)
  }

  return (
    <>
      <div className={styles.titleWrapper}>
        {showResult && (
          <NavLink to='/' className={styles.closeIcon} onClick={handleClose}>
            <CloseIcon />
          </NavLink>
        )}
        <h2>
          {movieNm}
          <span>{data?.pages[0].totalCnt}</span>
        </h2>
      </div>
      <div className={styles.overflowWrapper}>
        <LoadingPage isLoading={isLoading || isFetching} />
        {data?.pages.map((moviePage, index) => {
          const key = `${moviePage.totalCnt}-${index}`
          return <MovieList key={key} data={moviePage.data.movieListResult.movieList} />
        })}
        <NotFoundList inView={!data || !movieNm} />
        {showFetchRef && <div ref={ref} />}
      </div>
    </>
  )
}

export default Search
