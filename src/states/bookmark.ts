import { atom } from 'hooks/state'
import { IBookmarkItem } from 'types/bookmark'

export const bookMarkList = atom<IBookmarkItem[]>({
  key: '#bookmarkList',
  default: [],
})
