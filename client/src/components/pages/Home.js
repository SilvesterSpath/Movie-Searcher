import React, { useContext, useEffect } from 'react';
import MovieForm from '../movies/MovieForm';
import Movies from '../movies/Movies'
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <MovieForm />
      </div>
      <div>
        <Movies />
      </div>
    </div>
  );
};

export default Home;
