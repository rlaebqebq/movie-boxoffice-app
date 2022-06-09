import { useRecoilValue } from 'recoil'
import { Suspense } from 'react'

import { useSearchDetailQuery } from 'hooks/movieQuery'
import { targetMovieCdState } from 'states/movie'

import LoadingPage from 'components/LoadingPage'
import MovieinfoList from './movieinfoList'
import styles from './movieinfo.module.scss'

const MovieInfo = () => {
  const movieCd = useRecoilValue(targetMovieCdState)
  const data = useSearchDetailQuery(movieCd).data?.movieInfoResult.movieInfo

  return (
    <div className={styles.pageWrapper}>
      <Suspense fallback={<LoadingPage />}>
        <MovieinfoList data={data} />
      </Suspense>
    </div>
  )
}

export default MovieInfo
