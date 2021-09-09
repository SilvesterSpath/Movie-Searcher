import PropTypes from 'prop-types';;

const MovieItem = ({ movie }) => {   

  const { name, overview, img, releaseDate } = movie;  
  
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
      </h3>
      <ul className='list'>
        {img && (
          <li>
             <img src={img.url} alt={name} / >            
          </li>
        )}
        {overview && (
          <li>            
            {' ' + overview}
          </li>
        )}
               {releaseDate && (
          <li>            
            {' ' + releaseDate.slice(0, 10)}
          </li>
        )}
      </ul>

    </div>
  );
};

MovieItem.prototype = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
