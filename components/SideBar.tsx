import React, { useEffect, useState } from "react"
import Link from 'next/link'

import { client } from '../libs/contentful'

import styled from './Sidebar.module.scss'

const SideBar = () => {
  async function fetchEntries() {
    const entries = await client.getEntries({content_type: "category"})
    if (entries.items) return entries.items
  }

  const [category, setCategory] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setCategory([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <div className={styled.wrap}>
      <p className={styled.item}><Link href="/about">About me</Link></p>
      {category.length > 0 &&
        <>
          <h3 className={styled.heading}>Category archives</h3>
          <ul className={styled.list}>
            {category.map((p) => (
              <li className={styled.item} key={p.fields.slug}>
                <Link href={`/category/${p.fields.slug}`}>{p.fields.name}</Link>
              </li>
            ))}
          </ul>
        </>
      }
    </div>
  )
}

export default SideBar
