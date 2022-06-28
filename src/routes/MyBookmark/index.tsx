import { useRecoilValue } from 'hooks/state'
import { bookMarkList } from 'states'
import { IBookmarkItem } from 'types'

import BookmarkItem from './bookmarkItem'

import styles from './myBookmark.module.scss'

const MyBookmark = () => {
  const list = useRecoilValue<IBookmarkItem[]>(bookMarkList)

  return (
    <div className={styles.wrapper}>
      <h2>My Favorites</h2>
      <div className={styles.overflowWrapper}>
        {list.length > 0 ? (
          <ul className={styles.movieWrapper}>
            {list.map((item) => {
              return (
                <BookmarkItem
                  key={item.movieCd}
                  title={item.title}
                  openDt={item.openDt}
                  movieCd={item.movieCd}
                  backdropLink={item.backdropLink}
                />
              )
            })}
          </ul>
        ) : (
          <p className={styles.defaultMSG}>북마크가 비었습니다.</p>
        )}
      </div>
    </div>
  )
}
export default MyBookmark
