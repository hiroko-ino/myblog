import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import media from "styled-media-query";

import { white } from '../const/color'
import { font_en } from '../const/font'
import { FontSizeS,
         FontSizeXS,
         letterSpacingMin,
         mainLineHeight,
         basicFontSize,
         LineHeightmin,
         FontSizeS_SP,
         basicFontSizeSP } from '../const/point'

export const data = graphql`
    query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
        title
        createdAt(formatString: "Y.MM.DD")
        body {
        body
        }
        category {
        name
        }
    }
    }
`
const Wrap = styled.main`
    display: flex;

    ${media.lessThan("medium")`
      display: block;
      border: solid ${white};
      border-width: 1px;
      padding: 15px 20px 40px;
    `}
`

const Main = styled.div`
    width: calc(100% - 270px);
    border: solid ${white};
    border-width: 1px;
    padding: 25px 30px 60px;
    position: relative;
    &::before {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    left: -6px;
    top: 0;
    background: ${white};
    }

    ${media.lessThan("medium")`
      width: 100%;
      padding: 0;
      border: none;

      &::before {
        content: none;
      }
  `}
`

const Date = styled.p`
  padding-top: 35px;
  width: 270px;
  text-align: right;
  font-family: ${font_en};
  font-size: ${FontSizeS}px;
  letter-spacing: ${letterSpacingMin}em;
  &::after {
    content: "";
    width: 97px;
    height: 1px;
    background: ${white};
    vertical-align: middle;
    display: inline-block;
    margin-left: 6px;
    margin-right: 6px;
  }

  ${media.lessThan("medium")`
  padding-top: 0;
  width: auto;
  text-align: right;
  display: flex;
  align-items: center;
  font-size: ${FontSizeS_SP}px;

  &::after {
    content: none;
  }

  &::before {
    content: "";
    width: auto;
    height: 1px;
    background: ${white};
    vertical-align: middle;
    display: inline-block;
    margin-right: 7px;
    flex: 1;
    opacity: 0.5;
  }
`}
`
const Title = styled.h1`
  font-size: ${basicFontSize}px;
  line-height: ${LineHeightmin};

  ${media.lessThan("medium")`
    font-size: ${basicFontSizeSP}px;
    margin-top: 10px;
  `}

`
const Category = styled.p`
  font-family: ${font_en};
  font-size: ${FontSizeS}px;
  margin-top: 10px;
  letter-spacing: ${letterSpacingMin}em;

  ${media.lessThan("medium")`
    font-size: ${FontSizeS_SP}px;
  `}
`

const Body = styled.div`
    font-size: ${FontSizeXS}px;
    line-height: ${mainLineHeight};
    margin-top: 25px;

    & p:not(:first-child) {
      margin-top: 1em;
    }

    & pre {
      margin-top: 25px;
      background: rgba(255, 255, 255, 0.1);
      padding: 15px;
    }
`

const BackToIndex = styled.p`
  text-align: center;
  margin-top: 60px;
  letter-spacing: ${letterSpacingMin}em;

  ${media.lessThan("medium")`
    margin-top: 40px;
  `}
`

const LineLink = styled(Link)`
  font-family: ${font_en};
  font-size: ${FontSizeS}px;
  display: inline-block;
  border-bottom: 3px solid ${white};
  padding: 0 3px 3px;
  text-decoration: none;

  ${media.lessThan("medium")`
    font-size: ${FontSizeS_SP}px;
  `}
`

const BlogPage = (props) => {  
    return (
        <Layout>
            <SEO title={props.data.contentfulBlogPost.title} />
            <Wrap>
                <Date>{props.data.contentfulBlogPost.createdAt}</Date>
                <Main>
                    <Title>{props.data.contentfulBlogPost.title}</Title>
                    <Category>{'{'} category: {`"${props.data.contentfulBlogPost.category.name}"`} {'}'}</Category>
                    <Body dangerouslySetInnerHTML={{ __html: props.data.contentfulBlogPost.body.body}} />
                    <BackToIndex><LineLink to="/">BackToIndex</LineLink></BackToIndex>
                </Main>
            </Wrap>
        </Layout>
    )
}

export default BlogPage