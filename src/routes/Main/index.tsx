import cx from 'classnames'
import useClickAway from 'react-use/lib/useClickAway'
import { useRef } from 'react'

import { Toggle } from 'components'
import { useRecoil, useRecoilValue } from 'hooks/state'
import { showTypeState } from 'states'
import { openSearchBarState, showResultState } from 'states/toggle'

import Search from './SearchResult'
import SearchBar from './SearchBar'
import DailyBoxoffice from './Boxoffice/DailyBoxoffice'
import WeeklyBoxoffice from './Boxoffice/WeeklyBoxoffice'

import userImage from 'assets/userImage.png'
import styles from './main.module.scss'

const Main = () => {
  const showTypeValue = useRecoilValue(showTypeState)
  const showResult = useRecoilValue(showResultState)
  const [openSearchBar, setopenSearchBar] = useRecoil(openSearchBarState)

  const useclickAwayRef = useRef<HTMLDivElement>(null)

  const handleChange = () => {
    setopenSearchBar(true)
  }

  useClickAway(useclickAwayRef, () => {
    if (!openSearchBar) return
    setopenSearchBar(false)
  })

  return (
    <div className={styles.wrapper}>
      {showResult ? (
        <Search />
      ) : (
        <>
          <div className={styles.searchBarWrapper} ref={useclickAwayRef}>
            <div className={cx({ [styles.open]: openSearchBar })}>
              <img src={userImage} alt={userImage} />
              <span>Welcome stranger! 👋</span>
              <br />
              <span>Let&apos;s relax and watch a movie</span>
            </div>
            <div
              className={cx(styles.searchBar, { [styles.open]: openSearchBar })}
              onClick={handleChange}
              role='button'
              tabIndex={0}
              aria-label='background'
            >
              <SearchBar />
            </div>
          </div>
          <h1>Boxoffice Ranking 🏆</h1>
          <Toggle dataLeft='today' dataRight='week' />
          <DailyBoxoffice inView={showTypeValue === 'daily'} />
          <WeeklyBoxoffice inView={showTypeValue === 'weekly'} />
        </>
      )}
    </div>
  )
}

export default Main
