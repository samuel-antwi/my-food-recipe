import React, { useEffect, useState, useContext } from 'react';
import { Container, ListGroup, Col, Row } from 'react-bootstrap';
// import { APIContext } from '../context/APIContext';
import styled from 'styled-components';
import FoodNotFound from '../components/FoodNotFound';
import Loading from '../components/Loading';
import axios from 'axios';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Ingredients from '../components/Ingredients';
import Nutrients from '../components/Nutrients';
import { v4 as uuidv4 } from 'uuid';

const RecipeDetails = ({ match }) => {
  // const { food, query } = useContext(APIContext);
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  console.log(match);

  // useEffect(() => {
  //   if (food.length) {
  //     const recipe = food.find(
  //       (recipe) => recipe.recipe.label === match.params.id
  //     );
  //     setDetails(recipe);
  //   }
  //   setIsLoading(false);
  // }, [query, match.params.id]);

  useEffect(() => {
    const fetchFood = async () => {
      const response = await axios(
        ` https://api.edamam.com/search?q=${match.params.name}&app_id=99eb0e07&app_key=
    89fd9e5f3e9963a5b9c322412c9d2cea&from=0&to=9
    `
      );

      const recipe = response.data.hits.find((recipe) =>
        recipe.recipe.label.includes(match.params.name)
      );
      setRecipe(recipe);
      setIsLoading(false);
    };
    fetchFood();
  }, [match.params.name]);

  if (isLoading || recipe === undefined) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <Styles>
        <div className='recipe'>
          <Container>
            <div className='py-4'>
              <Link className='button' to='recipe'>
                <BsArrowLeft className='mr-2' size='2rem' />
                Go back
              </Link>
            </div>
            {/* Recipe image and other useful information */}
            <div className='recipe-details'>
              <Row>
                <Col>
                  <div
                    className='card-box bg-info mb-5'
                    md={6}
                    data-aos='fade-down'
                    data-aos-duration='1000'>
                    <div className='recipe-image'>
                      <img src={recipe.recipe.image} alt='' />
                    </div>
                    <div className=' text-light p-4 text-center'>
                      <h3 className=' font-weight-bold'>
                        {recipe.recipe.label}
                      </h3>
                      <p className='lead'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus vel dolor recusandae repellendus eius debitis
                        ipsa velit fugiat. Architecto, fuga.
                      </p>
                    </div>
                  </div>
                  <p className='lead'>
                    See more receipe details{' '}
                    <a
                      href={recipe.recipe.url}
                      className='text-muted'
                      target='_blank'
                      rel='noopener noreferrer'>
                      <u>{recipe.recipe.source}</u>
                    </a>
                  </p>
                </Col>
                {/* Nutrients passed as prop to Nutrients component */}
                <Col md={6}>
                  <Nutrients nutrient={recipe.recipe.totalNutrients} />
                </Col>
              </Row>
              {/* Ingredients paased as a prop to the Ingredient component */}
              <div className='ingredients pt-5'>
                <h3 className=' text-muted font-weight-bold'>
                  {recipe.recipe.ingredients.length} Ingredients
                </h3>
                {recipe.recipe.ingredients.map((ingredient) => (
                  <div key={uuidv4()}>
                    <ListGroup>
                      <Ingredients ingredient={ingredient} />
                    </ListGroup>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </Styles>
    </React.Fragment>
  );
};

export default RecipeDetails;

const Styles = styled.div`
  .recipe {
    padding: 150px 0px;
    a:hover {
      text-decoration: none;
    }

    .button {
      padding: 8px 16px;
      border: 1px solid var(--primary-btn);
      background: var(--primary-btn);
      color: #fff;
      &:hover {
        opacity: 0.9;
      }
    }

    img {
      width: 100%;
    }
    .card {
      width: 30rem;
    }

    .card-box {
      position: relative;
      width: 500px;
      height: 500px;
      background: black;
      border-radius: 10px;
    }

    .recipe-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 0.9s;
      z-index: 1;
    }

    .card-box:hover .recipe-image {
      top: 20px;
      left: calc(50% - 40px);
      width: 0px;
      height: 0px;
      border-radius: 100%;
    }

    .more-info {
      display: flex;
      justify-content: start;
    }
    li {
      list-style: none;
    }

    @media (max-width: 600px) {
      .card-box {
        width: 350px;
        height: 350px;
      }
    }
  }
`;
