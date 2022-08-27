import React from 'react'

import styled from './aboutPage.module.scss'

const AboutPage = React.memo(() => {
  return (
    <div className={styled.wrap}>
      <p className={styled.description}>
        author: hiroko ino<br />
        skill: html/css/JavaScript/TypeScript/WordPress/React/Vue.js/Flutter<br />
        contact: <a href="https://twitter.com/uribou_studying" target="_blank" rel="noopener noreferrer">Twitter</a><br /><br />
        美術大学出身で、最初はデザイナーとしてキャリアをスタートしました。<br />
        フロントエンドエンジニアになり、現在は事業会社でVue.jsやFlutterを書いています。
        仕事が落ち着いたらReactやデザインの副業を探す予定。
      </p>
      <ul className={styled.list}>
        <li className={styled.item}>
          <p className={styled.sitename}>
            Zenn
          </p>
          <p className={styled.text}>
            <a href="https://zenn.dev/hiroko_ino" target="_blank">
              https://zenn.dev/hiroko_ino
            </a><br />
            広く読んでもらいたい記事をアップしている場所です。
          </p>
        </li>
        <li className={styled.item}>
          <p className={styled.sitename}>
            GitHub
          </p>
          <p className={styled.text}>
            <a href="https://github.com/hiroko-ino" target="_blank">
              https://github.com/hiroko-ino
            </a><br />
            たいしたリポジトリはないですが、色々あげています。
          </p>
        </li>
        <li className={styled.item}>
          <p className={styled.sitename}>
            note
          </p>
          <p className={styled.text}>
            <a href="https://note.com/hiroko_ino" target="_blank">
              https://note.com/hiroko_ino
            </a><br />
            技術記事以外のものを載せています。
          </p>
        </li>
      </ul>
    </div>
  )
})

export default AboutPage
