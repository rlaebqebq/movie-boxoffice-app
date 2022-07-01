import MovieCard from 'components/MovieCard'
import { useRecoilValue } from 'hooks/state'
import { bookMarkList } from 'states'
import { IBookmarkItem } from 'types'

import styles from './myBookmark.module.scss'

const MyBookmark = () => {
  const bookmarkList = useRecoilValue<IBookmarkItem[]>(bookMarkList)

  return (
    <div className={styles.wrapper}>
      <h2>My Favorites</h2>
      {bookmarkList.length > 0 ? (
        <ul className={styles.overflowWrapper}>
          {bookmarkList.map((item) => (
            <MovieCard key={item.movieCd} item={item} hasRank={false} backdropLink={item.backdropLink} movieDetail />
          ))}
        </ul>
      ) : (
        <p className={styles.defaultMSG}>북마크가 비었습니다.</p>
      )}
    </div>
  )
}
export default MyBookmark
