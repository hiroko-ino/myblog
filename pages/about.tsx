import React from "react"

import Layout from '../components/Layout'

import styled from './about.module.scss'

const About = () => {
  return (
    <Layout>
      <div className={styled.wrap}>
        <div className={styled.description}>
          author: hiroko ino<br />
          skill: html/css/javascript/jQuery/WordPress/React<br />
          フロントエンドエンジニア歴そろそろ3年<br />
          contact: <a href="https://twitter.com/uribou_studying" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </Layout>
  )
}

export default About
