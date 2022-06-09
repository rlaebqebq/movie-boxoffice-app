import dayjs, { Dayjs } from 'dayjs'
import { atom } from 'recoil'

export const todayDtState = atom<Dayjs>({
  key: '#todayDtState',
  default: dayjs().subtract(1, 'day'),
})

export const targetMovieCdState = atom<string>({
  key: '#targetMovieCdState',
  default: '',
})

export const targetMovieOpenDtState = atom<Dayjs>({
  key: '#targetMovieOpenDtState',
  default: dayjs(),
})
