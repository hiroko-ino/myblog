import React from 'react'

import styled from './aboutPage.module.scss'

const AboutPage = React.memo(() => {
  return (
    <div className={styled.wrap}>
      <p className={styled.description}>
        author: hiroko ino<br />
        skill: html/css/javascript/jQuery/WordPress/React<br />
        contact: <a href="https://twitter.com/uribou_studying" target="_blank" rel="noopener noreferrer">Twitter</a><br /><br />
        こちらのブログはNext.jsで作っています。Reactの勉強楽しいので、React、Next.js等々に関する情報を上げていくかもしれません。<br />
        Three.js、GLSLにも興味あります。
      </p>
    </div>
  )
})

export default AboutPage
