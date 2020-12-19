import Link from 'next/link'
import Head from 'next/head'

import dayjs from 'dayjs'

import { client } from '../../libs/contentful'

import Layout from '../../components/Layout'

import styled from './[slug].module.scss'

const Blog = ({ post }) => {
  const day = dayjs(post.sys.createdAt);

  return (
    <>
      <Head>
        <title>{post.fields.title} | type:any</title>
        <meta name="description" content={post.fields.body.slice(0, 120).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')}></meta>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <Layout>
        <div className={styled.wrap}>
            <p className={styled.date}>{day.format("YYYY.MM.DD")}</p>
            <div className={styled.main}>
                <h1 className={styled.heading}>{post.fields.title}</h1>
                <p className={styled.category}>{'{'} category: {`"${post.fields.category.fields.name}"`} {'}'}</p>
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

  return {
    props: {
      post: post.items[0]
    },
  }
}

export default Blog;
