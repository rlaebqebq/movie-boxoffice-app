import cx from 'classnames'
import { useState, MouseEvent } from 'react'

import { ArrowIcon } from 'assets/svg'
import styles from './dropdown.module.scss'

interface Props {
  list: string[]
  action: Function
  selected: string
}

const Dropdown = ({ list, action, selected }: Props) => {
  const [openState, setOpenState] = useState(false)
  const [display, setDisplay] = useState(selected)

  const changeOpenStateHandler = () => {
    setOpenState((prev) => !prev)
  }

  const changeDisplayHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget
    setDisplay(value)
    action(value)
    setOpenState(false)
  }

  return (
    <div className={styles.dropdown}>
      <button
        type='button'
        className={cx({ [styles.displayActive]: openState }, styles.display)}
        onClick={changeOpenStateHandler}
      >
        {display}
        <ArrowIcon />
      </button>

      <ul className={cx({ [styles.isActive]: openState }, styles.list)}>
        {list.map((item) => (
          <li key={item}>
            <button type='button' className={styles.listItem} value={item} onClick={changeDisplayHandler}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
