import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useMount } from 'react-use'

import LoadingPage from 'components/LoadingPage'
import { useSetRecoilState } from 'hooks/state'
import { bookMarkList } from 'states/bookmark'
import { IBookmarkItem } from 'types/bookmark'
import { getBookmark } from 'utils/localStorage'

import Gnb from './Gnb'
import Main from './Main'
import Boxoffice from './Boxoffice'
import MovieDetail from './MovieDetail'
import MyBookmark from './MyBookmark'
import styles from './routes.module.scss'

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
            <Route path='/' element={<Main />} />
            <Route path='boxoffice' element={<Boxoffice />} />
            <Route path='movieinfo' element={<MovieDetail />} />
            <Route path='mybookmark' element={<MyBookmark />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App
