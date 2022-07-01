import { atom } from 'recoil'

export type TMediaTypeState = 'daily' | 'weekly'

export const showTypeState = atom<TMediaTypeState>({
  key: '#showTypeState',
  default: 'daily',
})

export type TDateRangeState = string | undefined

export const dateRangeState = atom<TDateRangeState>({
  key: '#dateRangeState',
  default: '',
})
