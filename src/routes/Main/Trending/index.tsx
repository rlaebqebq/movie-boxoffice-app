import { useTmdTrendingQuery } from 'hooks/tmdbQuery'
import { genreDict, IGenreDict } from 'routes/MovieDetail/Movieinfo/genreDict'
import styles from './trending.module.scss'

const Trending = () => {
  const data = useTmdTrendingQuery('day').data?.results
  const checkHasImage = (sourceLink: string) => {
    return `https://image.tmdb.org/t/p/w500${sourceLink}`
  }
  return (
    <ul className={styles.wrapper}>
      {data?.map((item, index) => {
        const key = `trending-${item}-${index}`
        return (
          <li key={key} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})` }}>
            <dl className={styles.rank}>
              <dt>{String(Math.floor(item.popularity))}</dt>
            </dl>
            <dl className={styles.info}>
              <dt>{item.title}</dt>
              <dd>
                {item.genre_ids.map((genre) => {
                  return genreDict[genre as keyof IGenreDict]
                })}
              </dd>
            </dl>
          </li>
        )
      })}
    </ul>
  )
}
export default Trending
