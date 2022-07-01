interface ICompany {
  companyCd: string
  companyNm: string
}

interface IDirector {
  peopleNm: string
}

export interface IMovieList {
  movieCd: string
  movieNm: string
  movieNmEn: string
  prdtYear: string
  openDt: string
  typeNm: string
  prdtStatNm: string
  nationAlt: string
  genreAlt: string
  repNationNm: string
  repGenreNm: string
  directors: Director[]
  companys: Company[]
}

interface ISearchMovieResult {
  totCnt: number
  source: string
  movieList: IMovieList[]
}

export interface ISearchMovieAPIRes {
  movieListResult: ISearchMovieResult
}

export interface IMoviesInfiniteResponse {
  // totCnt: number
  data: ISearchMovieAPIRes
  nextPage: number
  isLast: boolean
  // movieListResult: {}
}
