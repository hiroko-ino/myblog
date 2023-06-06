import React from 'react'

import styled from './aboutPage.module.scss'

const WorksPage = React.memo(() => {
  return (
    <div className={styled.wrap}>
      <p className={styled.description}>
        個人で副業を募集しています。<br />
        Web制作でのデザイナー・エンジニアとしての実績が9年間あります。実績のサイトをご覧になりたい方はTwitterのDMからお願いします。<br />
        本業はVue.js、Flutterですが、Webアプリのお仕事としてはReactメインで募集しています。UIに近い領域のお仕事も可です。<br />
        前前職でReactの案件に三ヶ月間参画した実績があります。<br />
        友人繋がりの案件を優先していますので、ご留意ください。<br />
        名前: 猪野 浩子<br />
        skill: html/css/JavaScript/TypeScript/WordPress/React/Vue.js/Flutter<br />
        contact: <a href="https://twitter.com/uribou_studying" target="_blank" rel="noopener noreferrer">Twitter</a><br /><br />
      </p>
    </div>
  )
})

export default WorksPage
