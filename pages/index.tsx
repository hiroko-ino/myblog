import Head from 'next/head'
import Post from '../components/post'

import { client } from '../libs/contentful'

import Layout from '../components/Layout'
import Pagination from '../components/Pagination'

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>type:any</title>
        <meta name="description" content="フロントエンドのことを中心に、自分の書きたいことを書くブログ"></meta>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <Layout>
        {posts.length > 0
          ? posts.map((p, index) => (
              index < 10 && <Post
                key={p.fields.slug}
                title={p.fields.title}
                category={p.fields.category.fields.name}
                slug={p.fields.slug}
                createdAt={p.sys.createdAt}
              />
            ))
          : null}
          <Pagination posts={posts} currentNum={1} />
        </Layout>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const entries = await client.getEntries({content_type: 'blogPost', order: '-sys.createdAt'})

  return {
    props: {
      posts: entries.items,
    },
  }
}

export default HomePage
