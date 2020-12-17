import React from "react"
import Link from 'next/link'

import styled from './Sidebar.module.scss'

const SideBar = () => {
  return (
    <div className={styled.wrap}>
      <p className={styled.item}><Link href="/about">About me</Link></p>
    </div>
  )
}

export default SideBar
