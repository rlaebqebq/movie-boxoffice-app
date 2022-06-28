import { atom } from 'hooks/state'
import { IBookmarkItem } from 'types'

export const bookMarkList = atom<IBookmarkItem[]>({
  key: '#bookmarkList',
  default: [],
})
