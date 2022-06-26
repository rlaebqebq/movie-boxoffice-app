import { useQuery } from 'react-query'

import { isAxiosError } from 'hooks/worker/axios'
import { getMoviePosterApi } from 'utils/koreafilm'
import { IMoviePosterAPIRes } from 'types/moviePoster'

export const useSearchPosterQuery = (title: string, releaseDts: string) => {
  return useQuery<IMoviePosterAPIRes, Error>(
    ['getMoviePosterApi', title, releaseDts],
    () => getMoviePosterApi({ title, releaseDts }).then((res) => res.data),
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
