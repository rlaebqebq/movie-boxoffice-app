import { useRecoilValue } from 'hooks/state'
import { showTypeState } from 'states'

import SearchBar from './SearchBar'
import DailyBoxoffice from './Boxoffice/DailyBoxoffice'
import WeeklyBoxoffice from './Boxoffice/WeeklyBoxoffice'

import userImage from 'assets/userImage.png'
import styles from './main.module.scss'
import Toggle from 'components/Toggle'

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
      <h1>Boxoffice Ranking 🏆</h1>
      <Toggle dataLeft='today' dataRight='week' />
      <DailyBoxoffice inView={showTypeValue === 'daily'} />
      <WeeklyBoxoffice inView={showTypeValue === 'weekly'} />
    </div>
  )
}

export default Main
