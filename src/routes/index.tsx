import { useSetRecoilState } from 'recoil'
import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useMount } from 'react-use'

import LoadingPage from 'components/LoadingPage'
import { bookMarkList } from 'states/movie'
import { IBookmarkItem } from 'types/movie'
import { getBookmark } from 'utils/localStorage'

import Boxoffice from './Boxoffice'
import Gnb from './Gnb'
import MovieInfo from './Movieinfo'
import styles from './routes.module.scss'
import MyBookmark from './MyBookmark'

const App = () => {
  const initialBookmark = useSetRecoilState<IBookmarkItem[]>(bookMarkList)

  useMount(() => {
    initialBookmark(getBookmark())
  })

  return (
    <div className={styles.appWrapper}>
      <div className={styles.innerWrapper}>
        <Gnb />
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path='/' element={<Boxoffice />} />
            <Route path='movieinfo' element={<MovieInfo />} />
            <Route path='mybookmark' element={<MyBookmark />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App
