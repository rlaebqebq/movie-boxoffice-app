import { ChangeEvent, FormEvent, useState } from 'react'
import cx from 'classnames'
import { SearchIcon } from 'assets/svg'
// import { AnimationControls, motion, useAnimation } from 'framer-motion'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useClickAway } from 'react-use'

import styles from '../main.module.scss'
import { useRecoil } from 'hooks/state'
import { openSearchBarState, showResultState } from 'states/toggle'

// interface IProps {
//   homeLogoAnimation: AnimationControls
//   inView: boolean
//   headerRef: React.RefObject<HTMLDivElement>
// }

interface ISearchForm {
  movieNm: string
}

const SearchBar = () => {
  const navigate = useNavigate()
  const [movieNm, setmovieNm] = useState('')
  const [searchOpen, setSearchOpen] = useState<boolean>(false)
  const [openSearchBar, setopenSearchBar] = useRecoil(openSearchBarState)

  // const { register, handleSubmit, setValue } = useForm<ISearchForm>()
  const [, setSearchParams] = useSearchParams()
  const [showResult, setShowResult] = useRecoil(showResultState)

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!movieNm.trim()) {
      return
    }
    setSearchParams({ movieNm })

    // navigate('searchResult')
    setmovieNm('')
    setShowResult(true)
  }
  // const handleBlockSpace = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue('movieNm', e.target.value.trim())
  // }

  // const inputAnimation = useAnimation()
  // const handleToggleSeachOpen = () => {
  //   setSearchOpen((prev) => !prev)
  // }

  // useClickAway(headerRef, () => {
  //   if (!searchOpen) return
  //   handleToggleSeachOpen()
  // })
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setmovieNm(e.currentTarget.value)
  }
  // if (!inView) return null
  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        value={movieNm}
        onChange={changeHandler}
        autoComplete='off'
        autoCapitalize='off'
        placeholder='검색어를 입력해 주세요.'
        className={cx({ [styles.open]: openSearchBar })}
      />
      <button type='submit'>
        <SearchIcon type='button' />
      </button>
    </form>
  )
}

export default SearchBar
