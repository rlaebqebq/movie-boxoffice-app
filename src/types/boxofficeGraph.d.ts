interface IWeeklyBoxOfficeList {
  rnum: string
  rank: string
  rankInten: string
  rankOldAndNew: string
  movieCd: string
  movieNm: string
  openDt: string
  salesAmt: string
  salesShare: string
  salesInten: string
  salesChange: string
  salesAcc: string
  audiCnt: string
  audiInten: string
  audiChange: string
  audiAcc: string
  scrnCnt: string
  showCnt: string
}

interface IBoxOfficeResult {
  boxofficeType: string
  showRange: string
  yearWeekTime: string
  weeklyBoxOfficeList: IWeeklyBoxOfficeList[]
}

export interface IBoxofficeGraphAPIRes {
  boxOfficeResult: IBoxOfficeResult
}
