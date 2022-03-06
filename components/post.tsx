import Link from 'next/link'

import dayjs from 'dayjs'

import styled from './Post.module.scss'

const Post = ({ title, slug, category, createdAt } : {
  title: string;
  slug: string;
  category: string;
  createdAt: string;
}) => {
  const day = dayjs(createdAt);

  return (
    <div className={styled.item}>
      <p className={styled.date}><time dateTime={day.format("YYYY-MM-DD")}>{day.format("YYYY.MM.DD")}</time></p>
      <div className={styled.main}>
        <Link href={`/blog/${encodeURIComponent(slug)}`}>
          <a className={styled.link}>
            <h2 className={styled.heading}>{title}</h2>
            <p className={styled.category}>{'{'} category: {`"${category}"`} {'}'}</p>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Post
