import React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"
import media from "styled-media-query";

import { white } from '../const/color'
import { basicFontSize,
         FontSizeS,
         letterSpacingMin,
         LineHeightmin,
         FontSizeS_SP,
         basicFontSizeSP } from '../const/point'
import { font_en } from '../const/font'

const Item = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:first-child) {
    margin-top: 5px;
  }
  &:not(:last-child) div {
    &::before {
      height: calc(100% + 7px);
    }
  }

  ${media.lessThan("medium")`
    display: block;
    border: solid ${white};
    border-width: 1px;
    padding: 15px 20px;
  `}

`
const Date = styled.p`
  width: 350px;
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
    margin-left: 7px;
    margin-right: 5px;
  }

  ${media.lessThan("medium")`
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

const Main = styled.div`
  width: calc(100% - 350px);
  border: solid ${white};
  border-width: 1px;
  padding: 16px 30px;
  position: relative;
  transition: background 0.8s;
  &::before {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    left: -6px;
    top: 0;
    background: ${white};
  }
  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }

  ${media.lessThan("medium")`
    width: 100%;
    padding: 0;
    border: none;

    &::before {
      content: none;
    }

    &:hover {
      background: none;
    }
  `}

`

const Title = styled.h2`
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

const StyledLink = styled(Link)`
  text-decoration: none;
`


const BlogList = (props) => {
  return (
    <Item>
      <Date>{props.createdAt}</Date>
      <Main>
        <StyledLink to={`/blog/${props.slug}`}>
          <Title>{props.title}</Title>
          <Category>{'{'} category: {`"${props.category}"`} {'}'}</Category>
        </StyledLink>
      </Main>
    </Item>
  )
}

export default BlogList