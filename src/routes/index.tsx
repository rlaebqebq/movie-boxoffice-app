import { Routes, Route } from 'react-router-dom'
import Boxoffice from './Main/Boxoffice'
import styles from './Routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Routes>
        <Route path='/' element={<Boxoffice />} />
      </Routes>
    </div>
  )
}

export default App
