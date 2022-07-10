import SearchBar from './searchBar'
import styles from '../main.module.scss'
import userImage from 'assets/userImage.webp'

const Search = () => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <div>
          <p>Welcome stranger! 👋</p>
          <p>Let&apos;s relax and watch a movie</p>
        </div>
        <img src={userImage} alt={userImage} />
      </div>
      <SearchBar />
    </>
  )
}

export default Search
