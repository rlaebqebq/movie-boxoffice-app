export interface IDailyBoxOfficeList {
  rnum: string
  rank: string
  rankInten: string
  rankOldAndNew: string
  movieCd: string
  movieNm: string
  openDt: string
  salesAmt: number
  salesShare: number
  salesInten: number
  salesChange: number
  salesAcc: number
  audiCnt: number
  audiInten: number
  audiChange: number
  audiAcc: number
  scrnCnt: number
  showCnt: number
}

export interface IDailyBoxOfficeResult {
  boxofficeType: string
  showRange: string
  dailyBoxOfficeList: IDailyBoxOfficeList[]
}

export interface IDailyBoxofficeAPIRes {
  boxOfficeResult: IDailyBoxOfficeResult
}
