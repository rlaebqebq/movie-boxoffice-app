import { IDailyBoxOfficeList } from 'types/dailyBoxoffice'

export interface IWeekRecordData {
  date: string
  data: IDailyBoxOfficeList
}

export interface IBookmarkItem {
  title: string
  openDt: string
  movieCd: string
  backdropLink: string
}
