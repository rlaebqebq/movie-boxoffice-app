import { useRecoilValue } from 'hooks/state'
import { showTypeState } from 'states'

import Toggle from 'components/Toggle'
import Boxoffice from './Boxoffice'
import SearchBar from './SearchBar'

import userImage from 'assets/userImage.webp'
import styles from './main.module.scss'

const Main = () => {
  const showTypeValue = useRecoilValue(showTypeState)

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <div>
          <p>Welcome stranger! 👋</p>
          <p>Let&apos;s relax and watch a movie</p>
        </div>
        <img src={userImage} alt={userImage} />
      </div>
      <SearchBar />
      <h2>Boxoffice Ranking 🏆</h2>
      <Toggle dataLeft='today' dataRight='week' />
      <Boxoffice inView={showTypeValue} />
    </div>
  )
}

export default Main
