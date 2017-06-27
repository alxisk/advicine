import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addTitle } from '../actions/titlesActions';

const SearchItem = ({ title, addTitle }) => (
  <li onClick={() => addTitle(title)}>
    {console.log('searchItem:', title)}
    <NavLink to={`/titles/${title.original_title}`}>
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

function mapDispatchToProps(dispatch) {
  return {
    addTitle: bindActionCreators(addTitle, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchItem);
