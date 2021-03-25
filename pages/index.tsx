import Head from 'next/head'
import Post from '../components/post'

import { client } from '../libs/contentful'

import Layout from '../components/Layout'
import Pagination from '../components/Pagination'

const HomePage = ({ posts, category }: {
  posts: any;
  category: any;
}) => {
  return (
    <>
      <Head>
        <title>type:any</title>
        <link rel="canonical" href="https://type-any.com/" />
        <meta name="description" content="フロントエンドのことを中心に、自分の書きたいことを書くブログ"></meta>
      </Head>
      <Layout category={category}>
        <div>
          {posts.length > 0
            ? posts.map((p: any, index: number) => (
                index < 10 && <Post
                  key={p.fields.slug}
                  title={p.fields.title}
                  category={p.fields.category.fields.name}
                  slug={p.fields.slug}
                  createdAt={p.sys.createdAt}
                />
              ))
            : null}
          </div>
          <Pagination posts={posts} currentNum={1} />
        </Layout>
    </>
  )
}

export const getStaticProps = async ({ params }: {
  params: any;
}) => {
  const entries = await client.getEntries({content_type: 'blogPost', order: '-sys.createdAt'})
  const category = await client.getEntries({content_type: "category"});

  return {
    props: {
      posts: entries.items,
      category: category.items
    },
  }
}

export default HomePage
