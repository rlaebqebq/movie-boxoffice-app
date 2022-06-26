import { atom } from 'hooks/state'

export const statusKrToEn = (status: string) => {
  const result = {
    '박스오피스 순위': 'rank',
    매출액: 'salesAmt',
    관객수: 'audiCnt',
    스크린수: 'scrnCnt',
    '상영 횟수': 'showCnt',
  }[status]

  return result
}

export const dailyBoxofficeDropdown = atom<string[]>({
  key: '#dailyBoxofficeDropdown',
  default: ['박스오피스 순위', '매출액', '관객수', '스크린수', '상영 횟수'],
})

export const dailyBoxofficeStatus = atom<string>({
  key: '#dailyBoxofficeStatus',
  default: '박스오피스 순위',
})
