import Head from 'next/head'
import { NextPage } from 'next'

export default function Index() {
  return (
    <>
      <Head>
        <title>type:any</title>
        <link rel="canonical" href="https://type-any.com/" />
        <meta name="description" content="フロントエンドのことを中心に、自分の書きたいことを書くブログ"></meta>
      </Head>
      <p style={{
        display: "grid",
        placeItems: "center",
        height: '100vh',
        textAlign: 'center',
        lineHeight: 2.3
      }}>
        このサイトはちょっとお休み中だよ、再開まで待っててね<br/>作りたいコンテンツたくさんあるから楽しみにしててね
      </p>
    </>
  )
}
