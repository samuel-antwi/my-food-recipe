import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Styles>
      <div className='page-not-found container'>
        <div className='content'>
          <h1 className='font-weight-bold text-muted'>404 Error</h1>
          <p className='lead'>Page Not found</p>
          <p>
            It seems like the page that you are looking for does not exist. You
            can click on the button below to go the home page.
          </p>
          <Link to='/' className='btn'>
            Go Home
          </Link>
          <Link to='recipe' className='btn mx-3'>
            Search Food
          </Link>
        </div>
      </div>
    </Styles>
  );
};

export default PageNotFound;

const Styles = styled.div`
  height: 100vh;
  .page-not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  .content {
    border-left: 6px solid crimson;
    padding-left: 20px;
  }

  .btn {
    border: 1px solid grey;
    padding: 7px 30px;
  }
`;
