import Link from 'next/link'
import Head from 'next/head'

import dayjs from 'dayjs'

import { client } from '../../../libs/contentful'

import Layout from '../../../components/Layout'
import Post from '../../../components/Post'

import styled from './[num].module.scss'

const Paged = ({ posts, category }) => {
  return (
    <>
      <Head>
        <title>{category} | type:any</title>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <Layout>
        {posts.length > 0
          ? posts.map((p) => (
              <Post
                key={p.fields.slug}
                title={p.fields.title}
                category={p.fields.category.fields.name}
                slug={p.fields.slug}
                createdAt={p.sys.createdAt}
            />
            ))
          : null}
      </Layout>
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await client.getEntries({content_type: "blogPost"})

  const paths = [];

  for (let i = 0; i <= Math.floor(posts.items.length / 10); i++) {
    paths.push({
      params: {
        num: (i + 1).toString(),
      }
    });
  }

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const posts = await client.getEntries({content_type: 'blogPost', order: '-sys.createdAt', limit: 10, skip: (params.num - 1) * 10 })

  return {
    props: {
      posts: posts.items,
    },
  }
}

export default Paged;
