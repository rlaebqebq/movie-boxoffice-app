import { Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { useMount } from 'react-use'
import { lazy, Suspense } from 'react'

import Loading from 'components/LoadingPage'
import ErrorPage from 'components/ErrorPage'
import { useSetRecoilState } from 'hooks/state'
import { bookMarkList } from 'states'
import { IBookmarkItem } from 'types'
import { getBookmark } from 'utils/localStorage'

import Gnb from './Gnb'
import styles from './routes.module.scss'

const Main = lazy(() => import('./Main'))
const SearchResult = lazy(() => import('./SearchResult'))
const MyBookmark = lazy(() => import('./MyBookmark'))
const MovieDetail = lazy(() => import('./MovieDetail'))

const App = () => {
  const initialBookmark = useSetRecoilState<IBookmarkItem[]>(bookMarkList)

  useMount(() => {
    initialBookmark(getBookmark())
  })

  return (
    <div className={styles.appWrapper}>
      <div className={styles.innerWrapper}>
        <Gnb />
        <ErrorBoundary fallback={<ErrorPage />}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='search' element={<SearchResult />} />
              <Route path='mybookmark' element={<MyBookmark />} />
              <Route path='movieinfo' element={<MovieDetail />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
