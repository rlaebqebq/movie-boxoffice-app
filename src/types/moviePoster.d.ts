interface Code {
  CodeNm: string
  CodeNo: string
}

interface Codes {
  Code: Code[]
}

interface CommCodes {
  CommCode: Code[]
}

interface Stat {
  screenArea: string
  screenCnt: string
  salesAcc: string
  audiAcc: string
  statSouce: string
  statDate: string
}

interface Vod {
  vodClass: string
  vodUrl: string
}

interface Vods {
  vod: Vod[]
}

interface Staff {
  staffNm: string
  staffEnNm: string
  staffRoleGroup: string
  staffRole: string
  staffEtc: string
  staffId: string
}

interface Staffs {
  staff: Staff[]
}

interface Rating {
  ratingMain: string
  ratingDate: string
  ratingNo: string
  ratingGrade: string
  releaseDate: string
  runtime: string
}

interface Ratings {
  rating: Rating[]
}

interface Plot {
  plotLang: string
  plotText: string
}

interface Plots {
  plot: Plot[]
}

interface Director {
  directorNm: string
  directorEnNm: string
  directorId: string
}

interface Directors {
  director: Director[]
}

interface Actor {
  actorNm: string
  actorId: string
}

interface Actors {
  actor: Actor[]
}

interface Result {
  DOCID: string
  movieId: string
  movieSeq: string
  title: string
  titleEng: string
  titleOrg: string
  titleEtc: string
  prodYear: string
  directors: Directors
  actors: Actors
  nation: string
  company: string
  plots: Plots
  runtime: string
  rating: string
  genre: string
  kmdbUrl: string
  type: string
  use: string
  episodes: string
  ratedYn: string
  repRatDate: string
  repRlsDate: string
  ratings: Ratings
  keywords: string
  posters: string
  stlls: string
  staffs: Staffs
  vods: Vods
  openThtr: string
  stat: Stat[]
  screenArea: string
  screenCnt: string
  salesAcc: string
  audiAcc: string
  statSouce: string
  statDate: string
  themeSong: string
  soundtrack: string
  fLocation: string
  Awards1: string
  Awards2: string
  regDate: string
  modDate: string
  Codes: Codes
  CommCodes: CommCodes
  ALIAS: string
}

interface Datum {
  CollName: string
  TotalCount: number
  Count: number
  Result: Result[]
}

export interface IMoviePosterAPIRes {
  Query: string
  KMAQuery: string
  TotalCount: number
  Data: Datum[]
}
