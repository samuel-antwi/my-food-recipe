import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

const About = () => {
  return (
    <React.Fragment>
      <Styles>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <div className='about'>
                <p className='lead'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, perferendis adipisci autem eum eos tenetur omnis
                  quia modi ad harum!
                </p>
                <div className='text-center'>
                  <h5>Github pages</h5>
                  <p>Visit my github account</p>
                  <a
                    className='btn'
                    href='https://github.com/samuel-antwi'
                    target='_blank'
                    rel='noreferre noopener'>
                    View Github
                  </a>
                  <div className='py-4'>
                    <Link className='btn' to='/'>
                      <AiOutlineHome className='mb-1' /> Home
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Styles>
    </React.Fragment>
  );
};

export default About;

const Styles = styled.div`
  height: 100vh;

  .about {
    padding-top: 150px;
  }
  .btn {
    padding: 8px 16px;
    border: 1px solid var(--primary-btn);
    background: var(--primary-btn);
    color: #fff;
    letter-spacing: 0.6px;

    &:hover {
      opacity: 0.8;
    }
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;
