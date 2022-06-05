import dayjs, { Dayjs } from 'dayjs'
import { atom } from 'recoil'

const GetSunday = () => {
  const today = dayjs().day()
  let lastSunday = dayjs()

  if (today !== 0) {
    lastSunday = lastSunday.subtract(today, 'day')
  } else {
    lastSunday = lastSunday.subtract(7, 'day')
  }
  return lastSunday
}

export const todayDtState = atom<Dayjs>({
  key: '#todayDtState',
  default: dayjs().subtract(1, 'day'),
})

export const weekDtState = atom<Dayjs>({
  key: '#weekDtState',
  default: GetSunday(),
})

export const targetMovieState = atom<string>({
  key: '#targetMovieState',
  default: '',
})
