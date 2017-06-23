import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SearchItem = ({ title }) => (
  <li >
    {console.log(title)}
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
  </li>
);

const SearchResults = ({ searchResults }) => (
  <section>
    {console.log(searchResults)}
    <ul>
      {searchResults.length ?
        searchResults.map(item => <SearchItem key={item.id} title={item} />) :
        <p>nothing found</p>
      }
    </ul>
  </section>
);

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults.results || []
  };
}

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired
};

SearchItem.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};

export default connect(mapStateToProps)(SearchResults);
