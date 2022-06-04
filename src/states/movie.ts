import dayjs, { Dayjs } from 'dayjs'
import { atom } from 'recoil'

const GetSunday = () => {
  const today = dayjs().day()
  let lastSunday = dayjs()

  if (today !== 0) {
    lastSunday = lastSunday.subtract(today, 'day')
  }
  return lastSunday
}

export const targetDtState = atom<Dayjs>({
  key: '#targetDtState',
  default: GetSunday(),
})
