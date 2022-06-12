import { IBookmarkItem } from 'types/movie'

export const getBookmark = (): IBookmarkItem[] => {
  const bookmark = localStorage.getItem('bookmark')

  if (bookmark) {
    return JSON.parse(bookmark)
  }

  return []
}

export const addBookmark = (item: IBookmarkItem): IBookmarkItem[] => {
  const bookmark = getBookmark()

  const newBookmarkList = [...bookmark, item]
  localStorage.setItem('bookmark', JSON.stringify(newBookmarkList))

  return newBookmarkList
}

export const delBookmark = (movieCd: string): IBookmarkItem[] => {
  const bookmark = getBookmark()

  const newBookmarkList = bookmark.filter((item) => item.movieCd !== movieCd)
  localStorage.setItem('bookmark', JSON.stringify(newBookmarkList))

  return newBookmarkList
}

export const isBookmarked = (movieCd: string): boolean => {
  const bookmark = getBookmark()

  const result = bookmark.findIndex((item) => item.movieCd === movieCd)
  return result !== -1
}
