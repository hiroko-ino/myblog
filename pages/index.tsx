import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/Post'

import { client } from '../libs/contentful'

import Layout from '../components/Layout'

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries({content_type: 'blogPost', order: '-sys.createdAt'})
    if (entries.items) return entries.items
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <>
      <Head>
        <title>type:any</title>
        <meta name="description" content="フロントエンドのことを中心に、自分の書きたいことを書くブログ"></meta>
        <link rel="icon" href="/icons/favicon.png"/>
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

export default HomePage
