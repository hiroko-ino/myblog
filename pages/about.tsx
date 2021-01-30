import Head from 'next/head'

import Layout from '../components/Layout'

import { client } from '../libs/contentful'

import styled from './about.module.scss'

const About = ({ category }: {
  category: any;
}) => {
  return (
    <Layout category={category}>
      <Head>
        <title>about | type:any</title>
        <meta name="description" content="type:anyのブログに関する情報です。"></meta>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <div className={styled.wrap}>
        <p className={styled.description}>
          author: hiroko ino<br />
          skill: html/css/javascript/jQuery/WordPress/React<br />
          contact: <a href="https://twitter.com/uribou_studying" target="_blank" rel="noopener noreferrer">Twitter</a><br /><br />
          こちらのブログはNext.jsで作っています。Reactの勉強楽しいので、React、Next.js等々に関する情報を上げていくかもしれません。<br />
          Three.js、GLSLにも興味あります。
        </p>
      </div>
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
