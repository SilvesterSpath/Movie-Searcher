import React, { useReducer } from 'react';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import axios from 'axios';


import {
  GET_MOVIES,
} from '../types';

const MovieState = (props) => {
  const initialState = {

    movies: null,

    error: null,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

   // Get Movies
  const getMovies = async() =>{
    const data = JSON.stringify({
    query: `query fetchPopular {
    movies: popularMovies {
      id
      name
      overview
      releaseDate
      img: poster {
        url: custom(size: "w185_and_h278_bestv2")
      }
      reviews {
        id
        author
        content
        language {
          code
          name
        }
      }
    }
  }`,
    variables: {}
  });
  
  const config = {
    method: 'post',
    url: 'https://cors-anywhere.herokuapp.com/https://tmdb.sandbox.zoosh.ie/dev/graphql',
    data : data
  };
  
    try {
      const res = await axios(config)
      console.log(res.data.data.movies);
      dispatch({
        type: GET_MOVIES,
        payload: res.data.data.movies,
      });
    } catch (error) {
      console.log(error.message);	  
    }
  }


  // Get Movie
  const getMovie = async (movie) =>{
    const data = JSON.stringify({
    query: `query SearchMovies {
  searchMovies(query: "${movie.name}") {
    id
    name
    overview
    releaseDate
    cast {
      id
      person {
        name
      }
      role {
        ... on Cast {
          character
        }
      }
    }
  }
}`,
    variables: {}
  });
  
  const config = {
    method: 'post',
    url: 'https://cors-anywhere.herokuapp.com/https://tmdb.sandbox.zoosh.ie/dev/graphql',
    data : data
  };
  
    try {
      const res = await axios(config)
      console.log(res.data.data.searchMovies);
      dispatch({
        type: GET_MOVIES,
        payload: res.data.data.searchMovies,
      });
    } catch (error) {
      console.log(error.message);	  
    }
  }

 

  
  return (
    <MovieContext.Provider
      value={{

        movies: state.movies,

        error: state.error,        
    
        getMovies,
        getMovie,
  
     
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
