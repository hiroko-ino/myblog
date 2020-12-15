import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/post'

import { client } from '../libs/contentful'

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries({content_type: "blogPost"})
    if (entries.items) return entries.items
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      console.log(allPosts);
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <>
      <Head>
        <title>type:any</title>
        <meta name="description" content="フロントエンドのことを中心に、自分の書きたいことを書くブログ"></meta>
        <link rel="icon" href="/icons/icon-48x48.png"/>
      </Head>
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
    </>
  )
}

export default HomePage
