import Head from 'next/head'

import { client } from '../../../libs/contentful'

import Layout from '../../../components/Layout'
import Post from '../../../components/post'
import Pagination from '../../../components/Pagination'

const Paged = ({ posts, num, allPosts, category }: {
  posts: any;
  num: number;
  allPosts: any;
  category: any;
}) => {
  return (
    <>
      <Head>
        <title>type:any</title>
        <link rel="canonical" href={`https://type-any.com/blog/page/1`} />
        <meta name="description" content="フロントエンドのことを中心に、自分の書きたいことを書くブログ"></meta>
      </Head>
      <Layout category={category}>
        <div>
          {posts.length > 0
            ? posts.map((p: any) => (
                <Post
                  key={p.fields.slug}
                  title={p.fields.title}
                  category={p.fields.category.fields.name}
                  slug={p.fields.slug}
                  createdAt={p.sys.createdAt}
              />
              ))
            : null}
          </div>
        <Pagination posts={allPosts} currentNum={Number(num)} />
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

export const getStaticProps = async ({ params }: {
  params: any;
}) => {
  const posts = await client.getEntries({content_type: 'blogPost', order: '-sys.createdAt', limit: 10, skip: (params.num - 1) * 10 })
  const allPosts = await client.getEntries({content_type: 'blogPost'})
  const category = await client.getEntries({content_type: "category"})

  return {
    props: {
      posts: posts.items,
      num: params.num,
      allPosts: allPosts.items,
      category: category.items
    },
  }
}

export default Paged;
