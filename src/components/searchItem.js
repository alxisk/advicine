import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchItem = ({ title }) => (
  <li>
    {console.log('searchItem:', title)}
    <NavLink to={`/titles/${title.id}-${title.original_title}`}>
      {title.poster_path ?
        <img
          src={`https://image.tmdb.org/t/p/w92${title.poster_path}`}
          alt={`${title.original_title} poster`}
        /> :
        <div style={{ width: '92px', height: '120px', background: 'lime' }} /> //*change in styles
      }
      <h2>{title.original_title}</h2>
      <p>({parseInt(title.release_date)})</p>
      <p>Rating: {title.vote_average}</p>
    </NavLink>
  </li>
);

SearchItem.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};

export default SearchItem;
