import cx from 'classnames'
import dayjs from 'dayjs'
import { NavLink } from 'react-router-dom'
import { MouseEvent } from 'react'

import { BookmarkIcon } from 'assets/svg'
import { useRecoilState } from 'hooks/state'

import { targetMovieCdState, targetMovieNmState, targetMovieOpenDtState } from 'states'
import { IMovieCard } from 'types/movie.d'
import { isBookmarked } from 'utils/localStorage'
import styles from './movieCard.module.scss'

interface IProps {
  item: IMovieCard
  hasRank: boolean
  backdropLink?: string
}
const MovieCard = ({ item, hasRank, backdropLink }: IProps) => {
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
    <li className={styles.movieCard} style={{ backgroundImage: `url(${backdropLink})` }}>
      <BookmarkIcon className={cx(styles.bookmark, { [styles.bookmarkChecked]: isBookmarked(item.movieCd) })} />
      <NavLink to='/movieinfo'>
        <button
          className={styles.innerWrapper}
          value={`${item.openDt}/${item.movieCd}/${item.movieNm}`}
          type='button'
          onClick={handleMovieTarget}
        >
          {hasRank && (
            <dl className={styles.rank}>
              <dt>{item.rank}</dt>
              <dd className={cx({ [styles.rankIntenPlus]: Number(item.rankInten) > 0 })}>{item.rankInten}</dd>
            </dl>
          )}
          <dl className={styles.info}>
            <dt>{item.movieNm}</dt>
            <dd>개봉일 : {item.openDt}</dd>
          </dl>
        </button>
      </NavLink>
    </li>
  )
}

export default MovieCard
