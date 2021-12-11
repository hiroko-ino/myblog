import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

import styled from './BlogSlugPage.module.scss'

import dayjs from 'dayjs'

import {
	FacebookShareButton,
	HatenaShareButton,
	TwitterShareButton,
	TwitterIcon,
	FacebookIcon,
	HatenaIcon,
} from "react-share";

interface BlogSlugPageProps {
	post: any;
	category: any;
	slug: string;
}

const BlogSlugPage: React.FC<BlogSlugPageProps> = React.memo(({ post, category, slug }) => {
	const day = dayjs(post.sys.createdAt);

  return (
    <Layout category={category}>
      <div className={styled.wrap}>
          <p className={styled.date}>{day.format("YYYY.MM.DD")}</p>
          <div className={styled.main}>
              <h1 className={styled.heading}>{post.fields.title}</h1>
              <p className={styled.category}>{'{'} category: {`"${post.fields.category.fields.name}"`} {'}'}</p>
              <div className={styled.share}>
                <TwitterShareButton url={`https://type-any.com/blog/${slug}`} title={post.fields.title}>
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <FacebookShareButton url={`https://type-any.com/blog/${slug}`} quote={post.fields.title}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <HatenaShareButton url={`https://type-any.com/blog/${slug}`} title={post.fields.title}>
                  <HatenaIcon size={32} round={true} />
                </HatenaShareButton>
              </div>
              <div className={styled.body} dangerouslySetInnerHTML={{ __html: post.fields.body}} />
              <div className={styled.back}><Link href="/"><a className={styled.backlink}>BackToIndex</a></Link></div>
          </div>
      </div>
    </Layout>
  )
})

export default BlogSlugPage
