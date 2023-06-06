import Link from 'next/link'

import styled from './Sidebar.module.scss'

const SideBar = ({ category }: {
  category: any;
}) => {
  return (
    <div className={styled.wrap}>
      <p className={styled.item}><Link href="/about">About me</Link></p>
      <p className={styled.item}><Link href="/works">Works</Link></p>
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
  )
}

export default SideBar
