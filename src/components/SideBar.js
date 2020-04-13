import React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"
import media from "styled-media-query";

import { white } from '../const/color'
import { FontSizeS, letterSpacingMin } from '../const/point'
import { font_en } from '../const/font'


const SideBarWrap = styled.aside`
  width: 265px;
  margin-left: 32px;
  border-top: 1px solid ${white};
  padding: 24px 12px;

  ${media.lessThan("large")`
    display: none;
  `}
`

const Item = styled.p`
  font-family: ${font_en};
  font-size: ${FontSizeS}px;
  letter-spacing: ${letterSpacingMin}em;
`

const SideBar = () => {
  return (
    <SideBarWrap>
      <Item><Link to="/about">About me</Link></Item>
    </SideBarWrap>
  )
}

export default SideBar