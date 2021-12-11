import Head from 'next/head'
import { NextPage } from 'next'

import { client } from '../../../../libs/contentful'

import CategoryNumPage from '../../../../pageContent/CategoryNumPage'

interface CategoryNumProps {
  posts: any;
  num: number;
  category: any;
  categorySlug: string;
  allPosts: any;
}

const CategoryNum: NextPage<CategoryNumProps> = ({ posts, num, category, categorySlug, allPosts }) => {
  return (
    <>
      <Head>
        <title>type:any</title>
        <meta name="description" content="フロントエンドのことを中心に、自分の書きたいことを書くブログ"></meta>
        <link rel="canonical" href={`https://type-any.com/category/${categorySlug}`} />
      </Head>
      <CategoryNumPage posts={posts} num={num} category={category} categorySlug={categorySlug} allPosts={allPosts} />
    </>
  )
}

export const getStaticPaths = async () => {
  const category = await client.getEntries({content_type: "category"})

  const paths = [];

  for (let i = 0; i < category.items.length; i++) {
    let posts = await client.getEntries({content_type: "blogPost", "fields.category.sys.id": category.items[i].sys.id, order: '-sys.createdAt'})
    if (posts.items.length > 0) {
      paths.push({
        params: {
          category: category.items[i].fields.slug.toString(),
          num: "1"
        }
      });
      for (let l = 1; l <= Math.floor(posts.items.length / 10) + 1; l++) {
        paths.push({
          params: {
            category: category.items[i].fields.slug.toString(),
            num: (l + 1).toString()
          }
        });
      }
    }
  }


  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: {
  params: any;
}) => {
  const narrowesCategory = await client.getEntries({content_type: "category", 'fields.slug': params.category})
  const allPosts = await client.getEntries({content_type: "blogPost", "fields.category.sys.id": narrowesCategory.items[0].sys.id })
  const posts = await client.getEntries({content_type: "blogPost", "fields.category.sys.id": narrowesCategory.items[0].sys.id, order: '-sys.createdAt', limit: 10, skip: (params.num - 1) * 10 })
  const category = await client.getEntries({content_type: "category"})

  return {
    props: {
      posts: posts.items,
      num: params.num,
      allPosts: allPosts.items,
      category: category.items,
      categorySlug: params.category
    },
  }
}

export default CategoryNum;
