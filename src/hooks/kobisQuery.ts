import { useQuery } from 'react-query'

import { isAxiosError } from 'hooks/worker/axios'
import { getBoxofficeApi, getMovieDetailApi } from 'utils/kobis'
import { IBoxofficeAPIRes } from 'types/dailyBoxoffice'
import { IMovieDetailAPIRes } from 'types/movieInfo'

export const useSearchDailyQuery = (targetDt: string) => {
  return useQuery<IBoxofficeAPIRes, Error>(
    ['getBoxofficeApi', targetDt],
    () => getBoxofficeApi({ targetDt }).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      suspense: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 3,
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
  return useQuery<IMovieDetailAPIRes, Error>(
    ['getMovieDetailApi', movieCd],
    () => getMovieDetailApi({ movieCd }).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      suspense: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 3,
      onError(err) {
        if (isAxiosError(err)) {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      },
    }
  )
}
