import React from 'react';
import styled from 'styled-components';
import { Container, ListGroup } from 'react-bootstrap';
import AOS from 'aos';

AOS.init();

const Nutrients = ({ nutrient }) => {
  return (
    <React.Fragment>
      <Styles>
        <div
          className='nutrients text-light'
          data-aos='fade-left'
          data-aos-duration='1000'>
          <h3 className='font-weight-bold text-muted pb-2'>Nutrients</h3>
          <ListGroup className='lead'>
            <ListGroup.Item className='d-flex justify-content-between bg-danger'>
              <span>{nutrient.FAT.label}</span>
              <span>
                {Math.round(nutrient.FAT.quantity)} {nutrient.FAT.unit}
              </span>
            </ListGroup.Item>
            <ListGroup.Item className='d-flex justify-content-between bg-success text-light'>
              <span>{nutrient.FIBTG.label}</span>
              <span>
                {Math.round(nutrient.FIBTG.quantity)} {nutrient.FIBTG.unit}
              </span>
            </ListGroup.Item>
            <ListGroup.Item className='d-flex justify-content-between bg-warning'>
              <span>{nutrient.CHOCDF.label}</span>
              <span>
                {Math.round(nutrient.CHOCDF.quantity)} {nutrient.CHOCDF.unit}
              </span>
            </ListGroup.Item>
            <ListGroup.Item className='d-flex justify-content-between bg-light text-muted'>
              <span>{nutrient.CHOLE.label}</span>
              <span>
                {Math.round(nutrient.CHOLE.quantity)} {nutrient.CHOLE.unit}
              </span>
            </ListGroup.Item>
            <ListGroup.Item className='d-flex justify-content-between bg-success'>
              <span>{nutrient.PROCNT.label}</span>
              <span>
                {Math.round(nutrient.PROCNT.quantity)} {nutrient.PROCNT.unit}
              </span>
            </ListGroup.Item>
            <ListGroup.Item className='d-flex justify-content-between bg-info'>
              <span>{nutrient.CA.label}</span>
              <span>
                {Math.round(nutrient.CA.quantity)} {nutrient.CA.unit}
              </span>
            </ListGroup.Item>
            <ListGroup.Item className='d-flex justify-content-between bg-danger'>
              <span>{nutrient.SUGAR.label}</span>
              <span>
                {Math.round(nutrient.SUGAR.quantity)} {nutrient.SUGAR.unit}
              </span>
            </ListGroup.Item>
            <ListGroup.Item className='d-flex justify-content-between bg-dark'>
              <span>{nutrient.ENERC_KCAL.label}</span>
              <span>
                {Math.round(nutrient.ENERC_KCAL.quantity)}{' '}
                {nutrient.ENERC_KCAL.unit}
              </span>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Styles>
    </React.Fragment>
  );
};

export default Nutrients;

const Styles = styled.div``;
