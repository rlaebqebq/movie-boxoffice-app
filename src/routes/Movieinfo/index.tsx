import { useRecoilValue } from 'recoil'
import { lazy, Suspense } from 'react'

import { useSearchDetailQuery } from 'hooks/movieQuery'
import { targetMovieCdState } from 'states/movie'

import LoadingPage from 'components/LoadingPage'
// import MovieinfoList from './movieinfoList'
import styles from './movieinfo.module.scss'
import MovieinfoTitle from './movieinfoTitle'
// import BoxofficeRecord from './BoxofficeRecord'

const MovieinfoList = lazy(() => import('./movieinfoList'))
const BoxofficeRecord = lazy(() => import('./BoxofficeRecord'))

const MovieInfo = () => {
  const movieCd = useRecoilValue(targetMovieCdState)
  const data = useSearchDetailQuery(movieCd).data?.movieInfoResult.movieInfo

  return (
    <div className={styles.pageWrapper}>
      <Suspense fallback={<LoadingPage />}>
        <h1>CHECK TODAY BOX OFFICE</h1>
        <MovieinfoTitle data={data} />
        <BoxofficeRecord />
        <MovieinfoList data={data} />
      </Suspense>
    </div>
  )
}

export default MovieInfo
