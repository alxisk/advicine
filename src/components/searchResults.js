import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchItem from './searchItem';

// eslint-disable-next-line react/prop-types
const SearchResults = ({ searchResults, advSearchResults, advanced }) => {
  const results = advanced ? advSearchResults : searchResults;
  return (
    <section className="search-results">
      <div className="wrap">
        <ul className="search-results__list">
          {
            results.length ?
            results.map(item => <SearchItem key={item.id} {...item} />) :
            <p>nothing found</p>
          }
        </ul>
      </div>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults.results || [],
    advSearchResults: state.searchResults.advSearchResults || [],
  };
}

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  advSearchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(SearchResults);
