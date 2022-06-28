import { ChangeEvent, FormEvent, useState } from 'react'

import { SearchIcon } from 'assets/svg'
// import { AnimationControls, motion, useAnimation } from 'framer-motion'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useClickAway } from 'react-use'

import styles from './searchBar.module.scss'
import { useRecoil } from 'hooks/state'
import { showResultState } from 'states/toggle'

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
  }
  // const handleBlockSpace = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue('movieNm', e.target.value.trim())
  // }

  const [searchOpen, setSearchOpen] = useState<boolean>(false)
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
    <form className={styles.search} onSubmit={submitHandler}>
      <input
        type='text'
        value={movieNm}
        onChange={changeHandler}
        autoComplete='off'
        autoCapitalize='off'
        placeholder='검색어를 입력해 주세요.'
        // style={{
        //   display: showResult ? `block` : `none`,
        // }}
      />
      <button type='submit'>
        <SearchIcon type='button' />
      </button>
    </form>
  )
}

export default SearchBar
