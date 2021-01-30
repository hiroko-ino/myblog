import Head from 'next/head'

import { client } from '../../../libs/contentful'

import Layout from '../../../components/Layout'
import Post from '../../../components/post'

import Pagination from '../../../components/Pagination'

const Blog = ({ posts, categorySlug, category }: {
  posts: any;
  categorySlug: string;
  category: any;
}) => {
  return (
    <>
      <Head>
        <title>{categorySlug} | type:any</title>
        <link rel="icon" href="/favicon.png"/>
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
          <Pagination posts={posts} currentNum={1} category={categorySlug} />
      </Layout>
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await client.getEntries({content_type: "category"})

  const paths = posts.items.map((post: any) => ({
    params: {
      category: post.fields.slug.toString(),
    },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: {
  params: any;
}) => {
  const narrowesCategory = await client.getEntries({content_type: "category", 'fields.slug': params.category})
  const post = await client.getEntries({content_type: "blogPost", "fields.category.sys.id": narrowesCategory.items[0].sys.id, order: '-sys.createdAt'})
  const category = await client.getEntries({content_type: "category"});

  return {
    props: {
      posts: post.items,
      categorySlug: params.category,
      category: category.items
    },
  }
}

export default Blog;
