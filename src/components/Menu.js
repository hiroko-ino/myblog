import React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"

import { white, mainBGPurple } from '../const/color'
import {
         FontSizeS,
         letterSpacingMin,
        } from '../const/point'
import { font_en } from '../const/font'

const Hamburger = styled.button`
    background-color: transparent;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
    border: 1px solid ${white};
    padding: 7px 7px 3px;
    width: 35px;
    position: fixed;
    top: 25px;
    right: 15px;
    z-index: 500;

    & span {
        display: block;
        margin-bottom: 4px;
        background: ${white};
        height: 2px;
    }

    ${(props) => {
        if( props.openFlag ) {
            return (
                `
                    padding: 7px 2px 3px 7px;

                    & span:nth-child(1) {
                        transform: rotate(32deg);
                        transform-origin: left top;
                    }
                
                    & span:nth-child(2) {
                        opacity: 0
                    }
                
                    & span:nth-child(3) {
                        transform: rotate(-32deg);
                        transform-origin: left bottom;
                    }
                `
            )
        }
    }};

`

const Item = styled.p`
  font-family: ${font_en};
  font-size: ${FontSizeS}px;
  letter-spacing: ${letterSpacingMin}em;
  text-align: center;

  &:not(:first-child) {
      margin-top: 15px;
  }
`

const SpNav = styled.div`
    padding-top: 140px;
    position: fixed;
    z-index: 100;
    background: ${mainBGPurple};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menuOpenFlag: false};
        this.menuToggle = this.menuToggle.bind(this);
        this.linkClick = this.linkClick.bind(this);
    }

    menuToggle() {
        this.setState({
            menuOpenFlag: !this.state.menuOpenFlag
        });
    }
    
    linkClick() {
        this.setState({
            menuOpenFlag: false
        });
    }

  render() {

    return (
        <>
            <Hamburger openFlag={ this.state.menuOpenFlag } onClick={this.menuToggle}><span></span><span></span><span></span></Hamburger>
            { this.state.menuOpenFlag && (
                <SpNav>
                    <Item onClick={this.linkClick}><Link to="/">Top</Link></Item>
                    <Item onClick={this.linkClick}><Link to="/about">About me</Link></Item>
                </SpNav>
            )}
        </>
      )
    }
}

export default Menu