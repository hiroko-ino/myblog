import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from '../components/BlogList'

const List = styled.ul`

`

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            title
            createdAt(formatString: "Y.MM.DD")
            slug
            category {
              name
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={'トップページ'} />
      <List>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <BlogList
              key={edge.node.slug}
              title={edge.node.title}
              slug={edge.node.slug}
              category={edge.node.category.name}
              createdAt={edge.node.createdAt}
            />
          )
        })}
      </List>
    </Layout>
  )
}

export default Index