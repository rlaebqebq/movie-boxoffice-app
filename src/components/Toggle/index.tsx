import { ChangeEvent } from 'react'

import { useRecoilState } from 'hooks/state'
import { showTypeState } from 'states'

import styles from './toggle.module.scss'

interface IProps {
  dataLeft: string
  dataRight: string
}

const Toggle = ({ dataLeft, dataRight }: IProps) => {
  const [, setMediaType] = useRecoilState(showTypeState)

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked === false) setMediaType('daily')
    else setMediaType('weekly')
  }

  return (
    <div className={styles.toggleWrapper}>
      <input type='checkbox' id='toggleTitle' onChange={handleToggle} />
      <label className={styles.toggleLabel} htmlFor='toggleTitle'>
        <div
          role='button'
          tabIndex={0}
          aria-label='background'
          className={styles.toggleCheck}
          data-unchecked={dataLeft}
          data-checked={dataRight}
        />
      </label>
    </div>
  )
}

export default Toggle
