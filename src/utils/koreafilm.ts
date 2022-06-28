import { axios } from 'hooks/worker'
import { IMoviePosterAPIRes } from 'types'

const POSTER_BASE_URL =
  'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2'

interface IMoviePosterParams {
  title: string
  releaseDts: string
}

export const getMoviePosterApi = (params: IMoviePosterParams) =>
  axios.get<IMoviePosterAPIRes>(POSTER_BASE_URL, {
    params: {
      ServiceKey: process.env.REACT_APP_MOVIE_POSTER_API_KEY,
      ...params,
    },
  })
