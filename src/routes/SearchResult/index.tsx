import loadable from '@loadable/component'
import { useInView } from 'react-intersection-observer'
import { NavLink, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

import Loading from 'components/Loading'
import { useSearchMovieQuery } from 'hooks/query'

import { CloseIcon } from 'assets/svg'
import styles from './searchResult.module.scss'

const MoviePages = loadable(() => import('./MoviePages'), {
  fallback: <Loading />,
})

const SearchResult = () => {
  const { ref, inView } = useInView()
  const [searchParams] = useSearchParams()

  const movieNm = searchParams.get('movieNm') || ''

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching, isLoading } = useSearchMovieQuery(movieNm)

  const showFetchRef = hasNextPage && !isFetchingNextPage && data && !isFetching && !isLoading
  const hasResult = !data || !movieNm || data.pages[0].totalCnt === 0

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [fetchNextPage, inView])

  return (
    <div className={styles.wrapper}>
      {/* {(isFetching || isLoading) && <Loading />} */}
      <NavLink to='/' className={styles.closeIcon}>
        <CloseIcon />
      </NavLink>
      <h2>{movieNm}</h2>
      <h3>Search Result : {data?.pages[0].totalCnt}</h3>
      {!hasResult ? (
        <div className={styles.overflowWrapper}>
          <MoviePages data={data} />
          {showFetchRef && <div ref={ref} />}
        </div>
      ) : (
        <p className={styles.defaultMSG}>검색 결과가 없습니다.</p>
      )}
    </div>
  )
}

export default SearchResult
