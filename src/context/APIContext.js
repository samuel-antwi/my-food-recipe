import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const APIContext = createContext();

const APIContextProvider = (props) => {
  const [food, setFood] = useState([]);
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('chicken');
  const [isLoading, setIsLoading] = useState(true);
  const [checkInputField, setCheckInputField] = useState(false);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_KEY;
    const API_ID = process.env.REACT_APP_ID;
    const fetchFood = async () => {
      const response = await axios(
        ` https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}
    &from=0&to=9
    `
      );
      setFood(response.data.hits);
      setIsLoading(false);
    };
    fetchFood();
  }, [query]);

  const fetchRecipe = (event) => {
    event.preventDefault();
    if (input.trim() !== '') {
      setIsLoading(true);
      setQuery(input);
      reset();
      setCheckInputField(false);
    } else {
      setCheckInputField(true);
    }
  };

  console.log(food);

  const reset = () => {
    setInput('');
  };

  const hideInputFieldWarning = () => {
    if (input.length >= 0) {
      setCheckInputField(false);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    hideInputFieldWarning();
  };

  return (
    <APIContext.Provider
      value={{
        food,
        input,
        setInput,
        isLoading,
        query,
        fetchRecipe,
        checkInputField,
        handleChange,
      }}>
      {props.children}
    </APIContext.Provider>
  );
};

export default APIContextProvider;
