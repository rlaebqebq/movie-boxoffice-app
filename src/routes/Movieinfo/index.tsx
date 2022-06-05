import { useRecoilValue } from 'recoil'
import { useQuery } from 'react-query'

import { getMovieInfoApi } from 'utils/movie'
import { targetMovieState } from 'states/movie'
import { isAxiosError } from 'hooks/worker/axios'

import LoadingPage from 'components/LoadingPage'
import MovieinfoList from './movieinfoList'
import styles from './movieinfo.module.scss'

const MovieInfo = () => {
  const targetMovie = useRecoilValue(targetMovieState)
  const movieCd = targetMovie.substring(10)

  const { data, isLoading } = useQuery(
    ['getMovieInfoApi', movieCd],
    () => getMovieInfoApi({ movieCd }).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      onError(err) {
        if (isAxiosError(err)) {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      },
    }
  )

  return (
    <div className={styles.pageWrapper}>
      {isLoading && <LoadingPage />}
      <MovieinfoList data={data} />
    </div>
  )
}

export default MovieInfo
