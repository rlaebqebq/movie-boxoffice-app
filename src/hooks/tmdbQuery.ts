import { useQuery } from 'react-query'

import { isAxiosError } from 'hooks/worker/axios'
import { getTmdbImageApi, getTmdbTrendingApi } from 'utils/tmdb'
import { ITmdbImageAPIRes } from 'types/tmdbImage'
import { ITmdbTrendingAPIRes } from 'types/tmdbTrending'

export const useTmdbSearchQuery = (query: string, primaryReleaseYear: number) => {
  return useQuery<ITmdbImageAPIRes, Error>(
    ['getTmdbImageApi', query, primaryReleaseYear],
    () => getTmdbImageApi({ query, primaryReleaseYear }).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      suspense: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 3,
      staleTime: 21600000,
      onError(err) {
        if (isAxiosError(err)) {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      },
    }
  )
}

export const useTmdTrendingQuery = (validTime: string) => {
  return useQuery<ITmdbTrendingAPIRes, Error>(
    ['getTmdbTrendingApi', validTime],
    () => getTmdbTrendingApi({ validTime }).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      suspense: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 3,
      staleTime: 21600000,
      onError(err) {
        if (isAxiosError(err)) {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      },
    }
  )
}
