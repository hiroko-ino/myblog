import React from "react"

import Layout from '../components/layout'
import styled from 'styled-components'
import media from "styled-media-query";

import { FontSizeS, mainLineHeight } from '../const/point'

const AboutWrap = styled.div`
  padding-left: 130px;

  ${media.lessThan("medium")`
    padding-left: 0;
  `}
`

const Description = styled.p`
  font-size: ${FontSizeS}px;
  line-height: ${mainLineHeight};
`

const About = () => {
  return (
    <Layout>
      <AboutWrap>
        <Description>
          author: hiroko ino<br />
          skill: html/css/javascript/jQuery/WordPress/React<br />
          フロントエンドエンジニア歴そろそろ3年<br />
          contact: <a href="https://twitter.com/uribou_studying" target="_blank" rel="noopener noreferrer">Twitter</a>
        </Description>
      </AboutWrap>
    </Layout>
  )
}

export default About