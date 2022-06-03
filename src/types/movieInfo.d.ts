interface ICompany {
  companyCd: string
  companyNm: string
  companyNmEn: string
  companyPartNm: string
}

interface IShowType {
  showTypeGroupNm: string
  showTypeNm: string
}

interface IActor {
  peopleNm: string
  peopleNmEn: string
  cast: string
  castEn: string
}

interface IDirector {
  peopleNm: string
  peopleNmEn: string
}

interface IGenre {
  genreNm: string
}

interface INation {
  nationNm: string
}

interface IMovieInfo {
  movieCd: string
  movieNm: string
  movieNmEn: string
  movieNmOg: string
  showTm: string
  prdtYear: string
  openDt: string
  prdtStatNm: string
  typeNm: string
  nations: Nation[]
  genres: Genre[]
  directors: Director[]
  actors: Actor[]
  showTypes: ShowType[]
  companys: Company[]
  audits: Audit[]
  staffs: Staff[]
}

interface IMovieInfoResult {
  movieInfo: IMovieInfo
  source: string
}

export interface IMovieSearchAPIRes {
  movieInfoResult: IMovieInfoResult
}
