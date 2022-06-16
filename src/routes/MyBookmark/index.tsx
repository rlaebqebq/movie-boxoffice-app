import cx from 'classnames'
import dayjs from 'dayjs'
import { BookmarkIcon } from 'assets/svg'
import { useRecoilState, useRecoilValue } from 'recoil'
import { NavLink } from 'react-router-dom'
import { MouseEvent } from 'react'

import { bookMarkList, targetMovieCdState, targetMovieNmState, targetMovieOpenDtState } from 'states/movie'
import { IBookmarkItem } from 'types/movie'
import { isBookmarked } from 'utils/localStorage'

import styles from './myBookmark.module.scss'

const MyBookmark = () => {
  const list = useRecoilValue<IBookmarkItem[]>(bookMarkList)
  const [, setTargetMovieCd] = useRecoilState(targetMovieCdState)
  const [, setTargetMovieOpenDt] = useRecoilState(targetMovieOpenDtState)
  const [, setTargetMovieNmState] = useRecoilState(targetMovieNmState)

  const handleMovieTarget = (e: MouseEvent<HTMLButtonElement>) => {
    const movieData = e.currentTarget.value.split('/')
    setTargetMovieOpenDt(dayjs(dayjs(movieData[0], 'YYYY-MM-DD').toDate()))
    setTargetMovieCd(movieData[1])
    setTargetMovieNmState(movieData[2])
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.title}>
        <h2>My Favorites</h2>
      </div>

      <div className={styles.movieWrapper}>
        {list.length > 0 ? (
          <ul>
            {list.map((item) => {
              return (
                <li key={item.movieCd} style={{ backgroundImage: `url(${item.backdropLink})` }}>
                  <div className={cx(styles.bookmark, { [styles.bookmarkChecked]: isBookmarked(item.movieCd) })}>
                    <BookmarkIcon />
                  </div>
                  <NavLink to='/movieinfo'>
                    <button
                      className={styles.innerWrapper}
                      value={`${item.openDt}/${item.movieCd}/${item.title}`}
                      type='button'
                      onClick={handleMovieTarget}
                    >
                      <dl className={styles.info}>
                        <dt>{item.title}</dt>
                        <dd>개봉일&nbsp;:&nbsp;{item.openDt}</dd>
                      </dl>
                    </button>
                  </NavLink>
                </li>
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
