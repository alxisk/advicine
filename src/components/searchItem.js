import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* eslint-disable camelcase */
const SearchItem = ({ id, title, poster_path, release_date, vote_average }) => (
  <li className="search-item">
    <Link to={`/titles/${id}-${title}`}>
      <div className="search-item__image-wrap">
        {poster_path ?
          <img
            src={`https://image.tmdb.org/t/p/w154${poster_path}`}
            alt={`${title} poster`}
          /> :
          <div className="search-item__blank-poster" />
        }
      </div>
      <h2 className="search-item__title">{title}</h2>
      <p className="search-item__release">({parseInt(release_date)})</p>
      <p className="search-item__rating">Rating: {vote_average}</p>
    </Link>
  </li>
);

SearchItem.defaultProps = {
  poster_path: null,
};

SearchItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};

export default SearchItem;
