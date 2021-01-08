import Link from 'next/link'
import Head from 'next/head'

import dayjs from 'dayjs'

import { client } from '../../libs/contentful'

import Layout from '../../components/Layout'

import styled from './[slug].module.scss'

import {
  FacebookShareButton,
  HatenaShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  HatenaIcon,
} from "react-share";


const Blog = ({ post, category, slug }) => {
  const day = dayjs(post.sys.createdAt);

  return (
    <>
      <Head>
        <title>{post.fields.title} | type:any</title>
        <meta name="description" content={post.fields.body.slice(0, 120).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')}></meta>
        <link rel="icon" href="/favicon.png"/>
        <meta property="og:title" content={`${post.fields.title} | type:any`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://type-any.com/blog/${slug}`} />
        <meta property="og:image" content="/ogp.png" />
        <meta property="og:site_name" content="type:any" />
        <meta property="og:description" content={post.fields.body.slice(0, 120).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')} />
      </Head>
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
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await client.getEntries({content_type: "blogPost"})

  const paths = posts.items.map((post) => ({
    params: {
      slug: post.fields.slug.toString(),
    },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const post = await client.getEntries({content_type: "blogPost", "fields.slug": params.slug})
  const category = await client.getEntries({content_type: "category"})

  return {
    props: {
      post: post.items[0],
      category: category.items,
      slug: params.slug
    },
  }
}

export default Blog;
