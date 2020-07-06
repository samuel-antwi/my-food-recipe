import React from 'react';
import spinner from '../assets/img/spinner.gif';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Loading = () => {
  return (
    <Styles>
      <div className='loading'>
        <img src={spinner} alt='Loading...' />
        <div className='btn py-1'>
          <Link to='recipe'>Cancel</Link>
        </div>
      </div>
    </Styles>
  );
};

export default Loading;

const Styles = styled.div`
  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  img {
    width: 100px;
  }

  .btn {
    padding: 8px 16px;
    border: 1px solid var(--primary-btn);
  }
  a:hover {
    text-decoration: none;
  }
`;
