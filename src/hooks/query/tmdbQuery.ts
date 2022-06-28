import { useQuery } from 'react-query'

import { isAxiosError } from 'hooks/worker/axios'
import { getTmdbImageApi } from 'utils/tmdb'
import { ITmdbImageAPIRes } from 'types'

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
