import { NavLink, useLocation } from 'react-router-dom'
import { BackIcon, MenuIcon } from 'assets/svg'
import styles from './gnb.module.scss'

const Gnb = () => {
  const nowLocation = useLocation().pathname
  return (
    <>
      {nowLocation !== '/' && (
        <NavLink to='/' className={styles.backIcon}>
          <BackIcon />
        </NavLink>
      )}
      <NavLink to='mybookmark' className={styles.menuIcon}>
        <MenuIcon />
      </NavLink>
    </>
  )
}

export default Gnb
