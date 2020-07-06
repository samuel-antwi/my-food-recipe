import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import bg from '../assets/img/bg.jpg';

const Nav = () => {
  return (
    <React.Fragment>
      <Styles>
        <div className='nav-bg'>
          <Container className='py-4'>
            <div className='app-nav'>
              <Link className='text-light logo' to='/'>
                dev antwi
              </Link>
              <div className='right-nav-links'>
                <Link className='text-light mx-4' to='recipe'>
                  Search food
                </Link>
                <Link className='text-light mx-4' to='about'>
                  About
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </Styles>
    </React.Fragment>
  );
};

export default Nav;
const Styles = styled.div`
  .nav-bg {
    background: url(${bg});
    height: 80px;
    width: 100%;
    position: absolute;
    z-index: 10;
  }

  a:hover {
    text-decoration: none;
  }

  .app-nav {
    display: flex;
    justify-content: space-between;
  }
  .logo {
    border-bottom: 4px solid #6d5210;
  }
`;
