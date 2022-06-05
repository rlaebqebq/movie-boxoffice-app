import { Routes, Route } from 'react-router-dom'

import Boxoffice from './Boxoffice'
import MovieInfo from './Movieinfo'

import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.innerWrapper}>
        <Routes>
          <Route path='/' element={<Boxoffice />} />
          <Route path='/movieinfo' element={<MovieInfo />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
