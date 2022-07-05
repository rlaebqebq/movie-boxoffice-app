import cx from 'classnames'
import { NavLink } from 'react-router-dom'

import { BookmarkIcon, HomeIcon } from 'assets/svg'
import styles from './gnb.module.scss'

const Gnb = () => {
  return (
    <nav className={styles.gnb}>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <HomeIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to='/mybookmark' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <BookmarkIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Gnb
