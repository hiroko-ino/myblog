import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import media from "styled-media-query";

import { letterSpacing } from '../const/point'
import { font_en } from '../const/font'

const HeaderWrap = styled.header`
  padding: 30px 52px 133px;
  letter-spacing: ${letterSpacing}em;

  ${media.lessThan("medium")`
    padding: 25px 15px 30px;
  `}
`

const Title = styled.h1`
  font-size: 36px;
  font-family: ${font_en};

  ${media.lessThan("medium")`
    font-size: 25px;
  `}
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <HeaderWrap className="header">
    <Title style={{ margin: 0 }}>
      <StyledLink to="/">
        {siteTitle}
      </StyledLink>
    </Title>
  </HeaderWrap>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
