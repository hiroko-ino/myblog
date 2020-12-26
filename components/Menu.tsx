import React, { useState } from "react"
import Link from 'next/link'

import styled from './Menu.module.scss'

const Menu = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => {
    setIsOpen(!isOpen);
  }

  const linkClick = () => {
    setIsOpen(false);
  }

  return (
      <>
          <div className={[styled.menu, isOpen && 'is-open'].join(' ')} onClick={menuToggle}><span></span><span></span><span></span></div>
          { isOpen && (
              <div className={styled.spnav}>
                  <p className={styled.item} onClick={linkClick}><Link href="/">Top</Link></p>
                  <p className={styled.item} onClick={linkClick}><Link href="/about">About me</Link></p>
                  {category.length > 0 &&
                    <>
                      <h3 className={styled.heading}>Category archives</h3>
                      <ul className={styled.list}>
                        {category.map((p: any) => (
                          <li className={styled.item} key={p.fields.slug}>
                            <Link href={`/category/${p.fields.slug}`}>{p.fields.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  }
              </div>
          )}
      </>
  )
}

export default Menu
