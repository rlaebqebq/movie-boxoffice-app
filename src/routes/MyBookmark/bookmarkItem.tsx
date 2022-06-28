import cx from 'classnames'
import dayjs from 'dayjs'
import { NavLink } from 'react-router-dom'
import { MouseEvent } from 'react'

import { useRecoilState } from 'hooks/state'
import { targetMovieCdState, targetMovieNmState, targetMovieOpenDtState } from 'states'
import { IBookmarkItem } from 'types'
import { isBookmarked } from 'utils/localStorage'

import { BookmarkIcon } from 'assets/svg'
import styles from './myBookmark.module.scss'

const BookmarkItem = ({ title, openDt, movieCd, backdropLink }: IBookmarkItem) => {
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
    <li key={movieCd} style={{ backgroundImage: `url(${backdropLink})` }}>
      <BookmarkIcon className={cx(styles.bookmark, { [styles.bookmarkChecked]: isBookmarked(movieCd) })} />
      <NavLink to='/movieinfo'>
        <button
          className={styles.innerWrapper}
          value={`${openDt}/${movieCd}/${title}`}
          type='button'
          onClick={handleMovieTarget}
        >
          <dl className={styles.info}>
            <dt>{title}</dt>
            <dd>개봉일&nbsp;:&nbsp;{openDt}</dd>
          </dl>
        </button>
      </NavLink>
    </li>
  )
}

export default BookmarkItem
