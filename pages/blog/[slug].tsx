import Link from 'next/link'

// post：getStaticPropsから取得したデータ
const Blog = ({ post }) => {
  return (
    <div>
      <h1>{post.fields.title}</h1>
      <p>{post.fields.body}</p>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  )
}

export const getStaticPaths = async () => {
  const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  const posts = await client.getEntries({content_type: "blogPost"})

  const paths = posts.items.map((post) => ({
    params: {
      slug: post.fields.slug.toString(),
    },
  }))
  return { paths, fallback: false }
}

// paramsには上記pathsで指定した値が入る（1postずつ）
export const getStaticProps = async ({ params }) => {
  const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  const post = await client.getEntries({content_type: "blogPost", "fields.slug": params.slug})

  return {
    props: {
      post: post.items[0]
    },
  }
}

export default Blog;
