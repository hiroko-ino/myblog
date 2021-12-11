import React from 'react'
import Layout from '../components/Layout'
import Post from '../components/post'
import Pagination from '../components/Pagination'

import styled from './CategoryNumPage.module.scss'

interface CategoryNumPageProps {
  posts: any;
  num: number;
  category: any;
  categorySlug: string;
  allPosts: any;
}

const CategoryNumPage: React.FC<CategoryNumPageProps> = React.memo(({ posts, num, category, categorySlug, allPosts }) => {
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
      <Pagination posts={allPosts} currentNum={Number(num)} category={categorySlug} />
    </Layout>
  )
})

export default CategoryNumPage
