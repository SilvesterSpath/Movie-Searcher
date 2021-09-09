import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MovieContext from '../../context/movie/movieContext';
import MovieItem from './MovieItem';
import Spinner from '../layout/Spinner';

const Movies = () => {
  const movieContext = useContext(MovieContext);

  const {  getMovies, movies, loading } = movieContext;

  useEffect(() => {     
    getMovies();    
    // eslint-disable-next-line
  }, []);

  
  if (movies !== null && movies.length === 0) {
    return <h4>Please add a Movie</h4>;
  } 


  return (
    <Fragment>
      { movies !== null && !loading ? (
        <TransitionGroup>
          { movies.map((i) => (
                <CSSTransition key={i.id} timeout={300} classNames='item'>
                  <MovieItem movie={i} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Movies;
