import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link'
import logo from '../../images/arturo.jpg';
import styled from 'styled-components';
import Img from 'gatsby-image';

const HeaderWrapper = styled.div`
  margin-bottom: 1.45rem;  
  overflow: hidden;
  position: relative;
  height: ${({isHome}) => (isHome ? '70vh' : '20vh')};
  h1 { 
    img {
      max-width: 125px;
      max-height: 125px;
    }
  }
`;

const HeaderContainer = styled.div`
  color: #ffffff;
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;  
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 10px;
      flex: 1;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        font-weight: 600;
        text-decoration: none;
        color: red;
        &:hover {
          border-bottom: 3px solid red;
        }
      }
    }
  }
`;

export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const {location} = this.props;
    if(location.pathname === prevProps.location.pathname) return;

    if(location.pathname === '/') {
      this.wrapper.animate([
        { height: '20vh' },
        { height: '70vh' },
      ], {
        duration: 300,
        fill: 'forwards',
        easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
        iterations: 1
      });
    } else {
      this.wrapper.animate([
        { height: '70vh' },
        { height: '20vh' },
      ], {
        duration: 300,
        fill: 'forwards',
        easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
        iterations: 1
      });
    }
  }

  render() {
    const { data, location } = this.props;
    return (      
        <HeaderWrapper 
          isHome={location.pathname === '/'}
          ref={wrapper => this.wrapper = ReactDOM.findDOMNode(wrapper)}
        >
          <HeaderContainer>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <img src={logo} alt="blog test" />
              </Link>
            </h1>
            <MainNav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </MainNav>
          </HeaderContainer>
          <Img 
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              opacity: '0.7',
            }} 
            resolutions={data.background.resolutions}
          />
        </HeaderWrapper>
    );
  }
}
