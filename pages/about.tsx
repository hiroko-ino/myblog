import Head from 'next/head'

import Layout from '../components/Layout'

import { client } from '../libs/contentful'
import AboutPage from '../pageContent/AboutPage'


const About = ({ category }: {
  category: any;
}) => {
  return (
    <Layout category={category}>
      <Head>
        <title>about | type:any</title>
        <link rel="canonical" href="https://type-any.com/about" />
        <meta name="description" content="type:anyのブログに関する情報です。"></meta>
      </Head>
      <AboutPage />
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

export default About
