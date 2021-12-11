import Head from 'next/head'
import { client } from '../libs/contentful'

import { NextPage } from 'next'
import IndexPage from '../pageContent/IndexPage'

interface IndexProps {
  posts: any;
  category: any;
}

const Index: NextPage<IndexProps> = ({ posts, category }) => {
  return (
    <>
      <Head>
        <title>type:any</title>
        <link rel="canonical" href="https://type-any.com/" />
        <meta name="description" content="フロントエンドのことを中心に、自分の書きたいことを書くブログ"></meta>
      </Head>
      <IndexPage posts={posts} category={category} />
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

export default Index
