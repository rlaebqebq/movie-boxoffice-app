import { useQuery, useInfiniteQuery } from 'react-query'

import { isAxiosError } from 'hooks/worker/axios'
import { getDailyBoxofficeApi, getMovieDetailApi, getWeeklyBoxofficeApi, getSearchMovieApi } from 'utils/kobis'
import { IDailyBoxofficeAPIRes, IWeeklyBoxofficeAPIRes, IMovieDetailAPIRes, ISearchMovieAPIRes } from 'types'

export const useSearchDailyQuery = (targetDt: string) => {
  return useQuery<IDailyBoxofficeAPIRes, Error>(
    ['getDailyBoxofficeApi', targetDt],
    () => getDailyBoxofficeApi({ targetDt }).then((res) => res.data),
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

export const useSearchWeeklyQuery = (targetDt: string) => {
  return useQuery<IWeeklyBoxofficeAPIRes, Error>(
    ['getWeeklyBoxofficeApi', targetDt],
    () => getWeeklyBoxofficeApi({ targetDt }).then((res) => res.data),
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

export const useSearchMovieQuery = (movieNm: string) => {
  return useInfiniteQuery(['movies', movieNm], ({ pageParam = 1 }) => getSearchMovieApi({ movieNm, pageParam }), {
    enabled: !!movieNm,
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLast) return lastPage.nextPage
      return undefined
    },
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: true,
    retry: 1,
    keepPreviousData: true,
  })
}
