import { NextPage } from 'next'
import Head from 'next/head'

import { client } from '../../../libs/contentful'
import CategoryIndexPage from '../../../pageContent/CategoryIndexPage'

interface IndexProps {
  posts: any;
  categorySlug: string;
  category: any;
}

const Index: NextPage<IndexProps> = ({ posts, categorySlug, category }) => {
  return (
    <>
      <Head>
        <title>{categorySlug} | type:any</title>
        <link rel="canonical" href={`https://type-any.com/category/${categorySlug}`} />
        <CategoryIndexPage posts={posts} category={category} categorySlug={categorySlug} />
      </Head>
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

export default Index;
