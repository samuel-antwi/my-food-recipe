import React, { useContext } from 'react';
import { APIContext } from '../context/APIContext';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import RecipeGrid from '../components/RecipeGrid';
import { v4 as uuidv4 } from 'uuid';
import Loading from '../components/Loading';
import FoodNotFound from '../components/FoodNotFound';




const Recipe = () => {
  const {
    food,
    input,
    isLoading,
    fetchRecipe,
    checkInputField,
    handleChange,
  } = useContext(APIContext);



  if (isLoading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <Styles>
        <Container className='py-5'>
          <div className='search-form'>
            <p className='lead'>Enter the name of a food to get its recipe</p>
            <form onSubmit={fetchRecipe}>
              <input
                autoFocus
                placeholder='Enter food name'
                className='search-input'
                type='text'
                value={input}
                onChange={handleChange}
              />
              <button className='search-btn'>Search</button>
              {checkInputField && (
                <small className='d-block text-danger py-1 h6'>
                  Input feild can't be empty
                </small>
              )}
            </form>
          </div>
          <Row >
            {food.map((recipe) => (
              <RecipeGrid key={uuidv4()} recipe={recipe} />
            ))}
          </Row>
          {food.length === 0 && <FoodNotFound />}
        </Container>
      </Styles>
    </React.Fragment>
  );
};

export default Recipe;

const Styles = styled.div`
  .search-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0px;
  }

  .search-btn {
    border-left: none;
    padding: 10px 12px;
    background: #4d004d;
    color: #fff;
    border: none;
    border: 1px solid #4d004d;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    &:hover {
      opacity: 0.9;
    }
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  .search-input {
    border-right: none;
    padding: 10px 20px;
    width: 300px;
    border: none;
    border: 1px solid #4d004d;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  @media (max-width: 500px) {
    .search-input {
      width: 190px;
    }
  }
`;
