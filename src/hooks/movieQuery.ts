import { useQuery } from 'react-query'

import { isAxiosError } from 'hooks/worker/axios'
import { getBoxofficeApi, getMovieInfoApi } from 'utils/movie'
import { IBoxofficeAPIRes } from 'types/dailyBoxoffice'
import { IMovieSearchAPIRes } from 'types/movieInfo'

export const useSearchDailyQuery = (targetDt: string) => {
  return useQuery<IBoxofficeAPIRes, Error>(
    ['getBoxofficeApi', targetDt],
    () => getBoxofficeApi({ targetDt }).then((res) => res.data),
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
