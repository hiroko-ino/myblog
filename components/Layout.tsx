import React from "react"
import MediaQuery from "react-responsive";

import Header from './Header'
import SideBar from './SideBar'
import Menu from './Menu'

import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MediaQuery query="(max-width: 1170px)">
        <Menu />
      </MediaQuery>
      <div className={styles.container}>
        <div className={styles.main}>{children}</div>
        <SideBar />
      </div>
    </>
  )
}

export default Layout
