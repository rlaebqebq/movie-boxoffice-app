import styles from './toggle.module.scss'
import { ChangeEvent, MouseEvent } from 'react'
import { useRecoilState } from 'hooks/state'
import { showTypeState } from 'states'

interface IProps {
  dataLeft: string
  dataRight: string
}

const Toggle = ({ dataLeft, dataRight }: IProps) => {
  const [mediaType, setMediaType] = useRecoilState(showTypeState)

  // const handleClickMovie = () => setMediaType('today')
  // const handleClickTVShows = () => setMediaType('week')
  const handleToggle2 = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked === false) setMediaType('daily')
    else setMediaType('week')
  }
  return (
    <>
      <input type='checkbox' id='toggleTitle' onChange={handleToggle2} value='dsfs' />
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
    </>
  )
}

export default Toggle
