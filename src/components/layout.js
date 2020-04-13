/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import media from "styled-media-query"
import Media from 'react-media'
import 'reset-css'

import Header from './header'
import SideBar from './SideBar'
import Menu from './Menu'

import { white, mainBGBlue, mainBGPurple } from '../const/color'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }

  body {
    background: linear-gradient(to bottom right, ${mainBGBlue}, ${mainBGPurple});
    color: ${white};
    font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "メイリオ", "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif;
  }

  a {
    color: ${white};
    &:hover {
      text-decoration: none;
    }
  }
`

const Body = styled.div`
  display: flex;

  ${media.lessThan("large")`
    padding-right: 20px;
  `}

  ${media.lessThan("medium")`
    padding-left: 20px;
  `}
`

const Main = styled.main`
  width: calc(100% - 290px - 32px);

  ${media.lessThan("large")`
    width: 100%;
  `}

`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Media query="(max-width: 1170px)">
          {matches => (
              <>
                {matches && (
                  <Menu />
                )}
              </>
          )}
        </Media>
      <Body>
        <Main>{children}</Main>
        <SideBar />
      </Body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
