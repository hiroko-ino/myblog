import Link from 'next/link'
import Head from 'next/head'

import dayjs from 'dayjs'

import { client } from '../../libs/contentful'

import Layout from '../../components/Layout'
import Post from '../../components/Post'

import styled from './[slug].module.scss'

const Blog = ({ posts, category }) => {
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
  const posts = await client.getEntries({content_type: "category"})

  const paths = posts.items.map((post) => ({
    params: {
      slug: post.fields.slug.toString(),
    },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const category = await client.getEntries({content_type: "category", 'fields.slug': params.slug})
  const post = await client.getEntries({content_type: "blogPost", "fields.category.sys.id": category.items[0].sys.id, order: '-sys.createdAt'})

  return {
    props: {
      posts: post.items,
      category: params.slug
    },
  }
}

export default Blog;
