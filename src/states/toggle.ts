import { atom } from 'recoil'

export type TMediaTypeState = 'daily' | 'weekly'

export const showTypeState = atom<TMediaTypeState>({
  key: '#mediaTypeState',
  default: 'daily',
})

export const openSearchBarState = atom<boolean>({
  key: '#openSearchBar',
  default: false,
})

export const showResultState = atom<boolean>({
  key: '#showResultState',
  default: false,
})

export type TDateRangeState = string | undefined

export const dateRangeState = atom<TDateRangeState>({
  key: '#dateRangeState',
  default: '',
})
