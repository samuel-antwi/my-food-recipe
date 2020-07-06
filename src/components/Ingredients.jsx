import React from 'react';
import styled from 'styled-components';
import { Container, ListGroup } from 'react-bootstrap';
import AOS from 'aos';

AOS.init({
  offset: 100,
});

const Ingredients = ({ ingredient }) => {
  return (
    <React.Fragment>
      <Styles>
        <div className='ingredient' data-aos='fade-up' data-aos-duration='1000'>
          <ListGroup.Item className='bg-info text-light lead'>
            {ingredient.text}
          </ListGroup.Item>
        </div>
      </Styles>
    </React.Fragment>
  );
};

export default Ingredients;

const Styles = styled.div``;
