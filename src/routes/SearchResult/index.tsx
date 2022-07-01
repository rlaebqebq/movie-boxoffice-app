import { lazy, Suspense, useEffect } from 'react'

import loadable from '@loadable/component'
import { useInView } from 'react-intersection-observer'
import { NavLink, useSearchParams } from 'react-router-dom'

import styles from './searchResult.module.scss'
import { useSearchMovieQuery } from 'hooks/query'
import { CloseIcon } from 'assets/svg'

const Loading = loadable(() => import('components/Loading'))
const MoviePages = lazy(() => import('./MoviePages'))

const SearchResult = () => {
  const { ref, inView } = useInView()
  const [searchParams] = useSearchParams()

  const movieNm = searchParams.get('movieNm') || ''

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching, isLoading } = useSearchMovieQuery(movieNm)

  const showFetchRef = hasNextPage && !isFetchingNextPage && data && !isFetching && !isLoading

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [fetchNextPage, inView])

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.wrapper}>
        <NavLink to='/' className={styles.closeIcon}>
          <CloseIcon />
        </NavLink>
        <h2>{movieNm}</h2>
        <h3>Search Result : {data?.pages[0].totalCnt}</h3>
        {!data || !movieNm || data.pages[0].totalCnt === 0 ? (
          <p className={styles.defaultMSG}>검색 결과가 없습니다.</p>
        ) : (
          <div className={styles.overflowWrapper}>
            <MoviePages data={data} />
            {showFetchRef && <div ref={ref} />}
          </div>
        )}
      </div>
    </Suspense>
  )
}

export default SearchResult
