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
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      {posts.length > 0
        ? posts.map((p) => (
            <Post
              key={p.fields.slug}
              title={p.fields.title}
              category={p.fields.category.fields.name}
              slug={p.fields.slug}
              createdAt={p.sys.createdAt}
              body={p.fields.body}
          />
          ))
        : null}
    </>
  )
}

export default HomePage
