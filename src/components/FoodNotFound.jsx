import React, { useContext } from 'react';
import styled from 'styled-components';
import { APIContext } from '../context/APIContext';
import { Link } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';

const FoodNotFound = () => {
  const { input } = useContext(APIContext);
  return (
    <React.Fragment>
      <Styles>
        <Container>
          <div className='food-not-found '>
            <Alert variant='warning lead'>
              Sorry there is no matching food for your search. Try different
              food.
            </Alert>
          </div>
        </Container>
      </Styles>
    </React.Fragment>
  );
};

export default FoodNotFound;

const Styles = styled.div`
  .food-not-found {
    max-width: 400px;
    text-align: center;
    margin: auto;
  }
`;
