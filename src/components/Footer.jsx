import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Styles>
        <div className='footer p-2'>
          <Container>
            <p>&copy; Site by Samuel Antwi 2020</p>
          </Container>
        </div>
      </Styles>
    </div>
  );
};

export default Footer;

const Styles = styled.div`
  .footer {
    background: var(--footer);
  }
  p {
    color: var(--light-text);
  }
`;
