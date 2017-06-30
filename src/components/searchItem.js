import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchItem = ({ title }) => (
  <li className="search-item">
    <NavLink to={`/titles/${title.id}-${title.original_title}`}>
      <div className="search-item__image-wrap">
        {title.poster_path ?
          <img
            src={`https://image.tmdb.org/t/p/w154${title.poster_path}`}
            alt={`${title.original_title} poster`}
          /> :
          <div className="search-item__blank-poster" />
        }
      </div>
      <h2 className="search-item__title">{title.original_title}</h2>
      <p className="search-item__release">({parseInt(title.release_date)})</p>
      <p className="search-item__rating">Rating: {title.vote_average}</p>
    </NavLink>
  </li>
);

SearchItem.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default SearchItem;
