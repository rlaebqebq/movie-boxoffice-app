import { useQuery } from 'react-query'

import { isAxiosError } from 'hooks/worker/axios'
import { getBoxofficeApi, getMovieInfoApi, getMoviePosterApi } from 'utils/movie'
import { IBoxofficeAPIRes } from 'types/dailyBoxoffice'
import { IMovieSearchAPIRes } from 'types/movieInfo'
import { IMoviePosterAPIRes } from 'types/moviePoster'

export const useSearchDailyQuery = (targetDt: string) => {
  return useQuery<IBoxofficeAPIRes, Error>(
    ['getBoxofficeApi', targetDt],
    () => getBoxofficeApi({ targetDt }).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      suspense: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 1,
      staleTime: 1000 * 60 * 5,
      onError(err) {
        if (isAxiosError(err)) {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      },
    }
  )
}

export const useSearchDetailQuery = (movieCd: string) => {
  return useQuery<IMovieSearchAPIRes, Error>(
    ['getMovieInfoApi', movieCd],
    () => getMovieInfoApi({ movieCd }).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      suspense: true,
      onError(err) {
        if (isAxiosError(err)) {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      },
    }
  )
}

export const useSearchPosterQuery = (title: string, releaseDts: string) => {
  return useQuery<IMoviePosterAPIRes, Error>(
    ['getMoviePosterApi', title, releaseDts],
    () => getMoviePosterApi({ title, releaseDts }).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      suspense: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 1,
      onError(err) {
        if (isAxiosError(err)) {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      },
    }
  )
}
