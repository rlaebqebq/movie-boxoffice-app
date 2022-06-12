import dayjs, { Dayjs } from 'dayjs'
import { atom } from 'recoil'
import { IBookmarkItem } from 'types/movie'

export const todayDtState = atom<Dayjs>({
  key: '#todayDtState',
  default: dayjs().subtract(1, 'day'),
})

export const targetMovieCdState = atom<string>({
  key: '#targetMovieCdState',
  default: '',
})

export const targetMovieNmState = atom<string>({
  key: '#targetMovieNmState',
  default: '',
})

export const targetMovieOpenDtState = atom<Dayjs>({
  key: '#targetMovieOpenDtState',
  default: dayjs(),
})

export const bookMarkList = atom<IBookmarkItem[]>({
  key: '#bookmarkList',
  default: [],
})
