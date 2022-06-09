interface IDailyBoxOfficeList {
  rnum: string
  rank: number
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

interface IBoxOfficeResult {
  boxofficeType: string
  showRange: string
  dailyBoxOfficeList: IDailyBoxOfficeList[]
}

export interface IBoxofficeAPIRes {
  boxOfficeResult: IBoxOfficeResult
}
