import Link from 'next/link'
import Head from 'next/head'

import { client } from '../../libs/contentful'

const Blog = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.fields.title} | type:any</title>
        <meta name="description" content={post.fields.body.slice(0, 120).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')}></meta>
        <link rel="icon" href="/icons/favicon.png"/>
      </Head>
      <div>
          <p>{post.sys.createdAt}</p>
          <div>
              <h1>{post.fields.title}</h1>
              <p>{'{'} category: {`"${post.fields.category.fields.name}"`} {'}'}</p>
              <div dangerouslySetInnerHTML={{ __html: post.fields.body}} />
              <div><Link href="/">BackToIndex</Link></div>
          </div>
      </div>
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
