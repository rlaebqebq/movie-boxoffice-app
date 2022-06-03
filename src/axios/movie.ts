import { axios } from 'hooks/worker'
import { IGetBoxofficeAPIRes } from 'types/boxoffice.d'
import { IMovieSearchAPIRes } from 'types/movieInfo.d'

const BASE_URL = 'http://kobis.or.kr/kobisopenapi/webservice/rest'

interface IBoxofficeParams {
  targetDt: string
}

interface IMovieSearchParams {
  movieCd: string
}

export const getBoxofficeApi = (params: IBoxofficeParams) =>
  axios.get<IGetBoxofficeAPIRes>(`${BASE_URL}/boxoffice/searchWeeklyBoxOfficeList.json`, {
    params: {
      key: process.env.REACT_APP_MOVIE_API_KEY,
      ...params,
    },
  })

export const getMovieInfoApi = (params: IMovieSearchParams) =>
  axios.get<IMovieSearchAPIRes>(`${BASE_URL}/movie/searchMovieInfo.json?`, {
    params: {
      key: process.env.REACT_APP_MOVIE_API_KEY,
      ...params,
    },
  })
