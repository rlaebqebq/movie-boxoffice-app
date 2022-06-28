import dayjs, { Dayjs } from 'dayjs'
import { atom } from 'hooks/state'

export const todayDtState = atom<Dayjs>({
  key: '#todayDtState',
  default: dayjs().subtract(1, 'day'),
})

export const latestSundayDtState = atom<Dayjs>({
  key: '#latestSundayState',
  default: dayjs().day() !== 0 ? dayjs().subtract(dayjs().day(), 'day') : dayjs(),
})
