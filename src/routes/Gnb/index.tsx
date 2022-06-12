import { NavLink, useLocation } from 'react-router-dom'
import { BackIcon, CloseIcon, MenuIcon } from 'assets/svg'
import styles from './gnb.module.scss'

const Gnb = () => {
  const nowLocation = useLocation().pathname
  return (
    <>
      {nowLocation === '/movieinfo' && (
        <NavLink to='/' className={styles.backIcon}>
          <BackIcon />
        </NavLink>
      )}
      {nowLocation === '/mybookmark' && (
        <NavLink to='/' className={styles.closeIcon}>
          <CloseIcon />
        </NavLink>
      )}

      {nowLocation !== '/mybookmark' && (
        <NavLink to='/mybookmark' className={styles.menuIcon}>
          <MenuIcon />
        </NavLink>
      )}
    </>
  )
}

export default Gnb
