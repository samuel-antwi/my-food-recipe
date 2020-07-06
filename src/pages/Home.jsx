import React from 'react';
import styled from 'styled-components';
import spicy from '../assets/video/spicy.mp4';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AOS from 'aos';

AOS.init();

const Home = () => {
  return (
    <React.Fragment>
      <Styles>
        <div className='banner'>
          <video autoPlay muted loop>
            <source src={spicy} type='video/mp4' />
          </video>
          <div className='overlay'>
            <Container className='py-5'>
              <div className='content text-light'>
                <h5
                  className='display-4 font-weight-bold'
                  data-aos='fade-right'
                  data-aos-duration='3000'>
                  Food Recipe
                </h5>
                <p className='lead '>
                  This is a simple web application that allows user to search
                  recipe for almost every food. Just enter the name of the food
                  in the search bar below to get its recipe. Together with
                  recipe you can also find other useful information such as
                  nutrients.
                </p>
                <Link to='recipe' className='search-btn font-weight-bold my-4'>
                  Get started
                </Link>
              </div>
            </Container>
          </div>
        </div>
      </Styles>
    </React.Fragment>
  );
};

export default Home;

const Styles = styled.div`
  a:hover {
    text-decoration: none;
  }
  .banner {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .banner video {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .banner .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    max-width: 900px;
    margin: auto;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }

  .search-btn {
    all: unset;
    border: 1px solid #daa520;
    padding: 10px 24px;
    cursor: pointer;
    border-radius: 5px;
    color: #daa520;
    letter-spacing: 0.7px;
    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    .banner .content {
      height: 90vh;
    }
    .content {
      h5 {
        font-size: 2rem;
      }
      p {
        color: #c4c4c4;
      }
    }
  }
`;
