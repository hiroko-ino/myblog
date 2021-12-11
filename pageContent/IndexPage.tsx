import React from 'react'
import Layout from '../components/Layout'
import Post from '../components/post'
import Pagination from '../components/Pagination'

interface IndexPageProps {
  posts: any;
  categorySlug: string;
  category: any;
}

const IndexPage: React.FC<IndexPageProps> = React.memo(({ posts, category, categorySlug }) => {
  return (
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
  )
})

export default IndexPage
