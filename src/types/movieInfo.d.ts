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
  nations: INation[]
  genres: IGenre[]
  directors: IDirector[]
  actors: IActor[]
  showTypes: IShowType[]
  companys: ICompany[]
  audits: IAudit[]
  staffs: IStaff[]
}

interface IMovieInfoResult {
  movieInfo: IMovieInfo
  source: string
}

export interface IMovieDetailAPIRes {
  movieInfoResult: IMovieInfoResult
}
