import React from 'react';
import styled from 'styled-components';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';

AOS.init();

const RecipeGrid = ({ recipe }) => {
  return (
    <React.Fragment>
      <Styles>
        <div className='recipe-grid'>
          <Col
            data-aos='fade-up'
            data-aos-duration='1000'
            md={{ span: 10, offset: 1 }}
            className='mb-4'>
            <Link to={`/details${recipe.recipe.label}`}>
              <Card className='text-center'>
                <Card.Img variant='top' src={recipe.recipe.image} />
                <Card.Body>
                  <Card.Title>
                    <h5 className='text-muted'>{recipe.recipe.label}</h5>
                  </Card.Title>
                  <button className='btn'>See Recipe</button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </div>
      </Styles>
    </React.Fragment>
  );
};

export default RecipeGrid;

const Styles = styled.div`
  a:hover {
    text-decoration: none;
  }
  .card {
    width: 20rem;
    overflow: hidden;
  }
  img {
    transition: all 0.4s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .btn {
    border: 1px solid var(--primary-btn);
    background: var(--primary-btn);
    color: #fff;
    &:hover {
      opacity: 0.6;
    }
  }
`;
