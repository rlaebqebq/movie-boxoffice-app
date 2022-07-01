import cx from 'classnames'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
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
  movieDetail: boolean
}
const MovieCard = ({ item, hasRank, backdropLink, movieDetail }: IProps) => {
  const [, setTargetMovieOpenDt] = useRecoilState(targetMovieOpenDtState)
  const [, setTargetMovieCd] = useRecoilState(targetMovieCdState)
  const [, setTargetMovieNm] = useRecoilState(targetMovieNmState)

  const navigate = useNavigate()

  const handleMovieTarget = (e: MouseEvent<HTMLButtonElement>) => {
    if (movieDetail) {
      const movieData = e.currentTarget.value.split('/')
      setTargetMovieOpenDt(dayjs(dayjs(movieData[0], 'YYYY-MM-DD').toDate()))
      setTargetMovieCd(movieData[1])
      setTargetMovieNm(movieData[2])
      navigate(`/movieinfo?movieCd=${movieData[1]}`)
    }
  }

  const setOpenDt = (openDt: string) => {
    if (movieDetail) {
      if (openDt.includes('-')) {
        return <dd>개봉일 : {item.openDt}</dd>
      }
      return <dd>개봉일 : {`${openDt.substring(0, 4)}-${openDt.substring(4, 6)}-${openDt.substring(6, 8)}`}</dd>
    }
    return <dd>정보 없음</dd>
  }

  return (
    <li className={styles.movieCard} style={{ backgroundImage: `url(${backdropLink})` }}>
      <BookmarkIcon className={cx(styles.bookmark, { [styles.bookmarkChecked]: isBookmarked(item.movieCd) })} />
      <button
        className={cx(styles.innerWrapper, { [styles.movieDetail]: movieDetail })}
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
          {item.movieNmEn === undefined || item.movieNmEn.length === 0 ? (
            <dt>{item.movieNm}</dt>
          ) : (
            <dt>
              {item.movieNm} ({item.movieNmEn})
            </dt>
          )}
          {setOpenDt(item.openDt)}
        </dl>
      </button>
    </li>
  )
}

export default MovieCard
