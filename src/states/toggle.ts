import { atom } from 'recoil'

export type TMediaTypeState = 'daily' | 'week'

export const showTypeState = atom<TMediaTypeState>({
  key: '#mediaTypeState',
  default: 'daily',
})

export const showResultState = atom<boolean>({
  key: '#showResultState',
  default: false,
})
