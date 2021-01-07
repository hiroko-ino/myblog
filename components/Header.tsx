import Link from 'next/link'

import styled from './Header.module.scss'

const Header = () => (
  <header className={styled.header}>
    <h1 className={styled.heading}>
      <Link href="/">
        <a className={styled.link}>
          type:any
        </a>
      </Link>
    </h1>
  </header>
)

export default Header
