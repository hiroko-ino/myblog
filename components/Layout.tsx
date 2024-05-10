import MediaQuery from "react-responsive";

import Header from './Header'
import SideBar from './SideBar'
import Menu from './Menu'

import styles from './Layout.module.scss'

const Layout = ({ children, category }: {
  children: React.ReactNode;
  category: any;
}) => {
  return (
    <>
      <Header />
      <Menu category={category} />
      <div className={styles.container}>
        <div className={styles.main}>{children}</div>
        <SideBar category={category} />
      </div>
    </>
  )
}

export default Layout
