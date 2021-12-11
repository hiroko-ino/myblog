import React from 'react'
import Layout from '../components/Layout'
import Post from '../components/post'
import Pagination from '../components/Pagination'

interface BlogNumPageProps {
  posts: any;
  num: number;
  allPosts: any;
  category: any;
}

const BlogNumPage: React.FC<BlogNumPageProps> = React.memo(({ posts, num, allPosts, category }) => {
  return (
    <Layout category={category}>
    <div>
      {posts.length > 0
        ? posts.map((p: any) => (
            <Post
              key={p.fields.slug}
              title={p.fields.title}
              category={p.fields.category.fields.name}
              slug={p.fields.slug}
              createdAt={p.sys.createdAt}
          />
          ))
        : null}
      </div>
    <Pagination posts={allPosts} currentNum={Number(num)} />
  </Layout>
  )
})

export default BlogNumPage
