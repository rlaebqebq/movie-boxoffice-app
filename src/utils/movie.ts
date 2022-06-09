import { axios } from 'hooks/worker'
import { IBoxofficeAPIRes } from 'types/dailyBoxoffice'
import { IMovieSearchAPIRes } from 'types/movieInfo.d'

const BASE_URL = 'http://kobis.or.kr/kobisopenapi/webservice/rest'

interface IBoxofficeParams {
  targetDt: string
}

interface IMovieSearchParams {
  movieCd: string
}

export const getBoxofficeApi = (params: IBoxofficeParams) =>
  axios.get<IBoxofficeAPIRes>(`${BASE_URL}/boxoffice/searchDailyBoxOfficeList.json`, {
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
