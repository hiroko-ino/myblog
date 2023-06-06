import Head from 'next/head'

import Layout from '../components/Layout'

import { client } from '../libs/contentful'
import WorksPage from '../pageContent/WorksPage'


const Works = ({ category }: {
  category: any;
}) => {
  return (
    <Layout category={category}>
      <Head>
        <title>works | type:any</title>
        <link rel="canonical" href="https://type-any.com/works" />
        <meta name="description" content="私の仕事募集に関する情報です。"></meta>
      </Head>
      <WorksPage />
    </Layout>
  )
}

export const getStaticProps = async ({ params }: {
  params: any;
}) => {
  const category = await client.getEntries({content_type: "category"});

  return {
    props: {
      category: category.items
    },
  }
}

export default Works
