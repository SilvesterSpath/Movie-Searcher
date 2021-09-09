import React, { useState, useContext } from 'react';
import MovieContext from '../../context/movie/movieContext';

const MovieForm = () => {
  const movieContext = useContext(MovieContext);

  const { getMovie } = movieContext;

  const [movie, setContact] = useState({
    name: '',

  });

  const { name } = movie;

  const onChange = (event) => {
    setContact({ ...movie, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(movie);
    getMovie(movie);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 className='text-primary'>
          {'Search Movies'}
        </h2>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onChange}
        />       
 
        <div>
          <input
            type='submit'
            value={'Search'}
            className='btn btn-primary btn-block'
          />
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
