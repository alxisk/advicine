import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchItem from './searchItem';

const SearchResults = ({ searchResults }) => (
  <section className="search-results">
    <div className="wrap">
      <ul className="search-results__list">
        {searchResults.length ?
          searchResults.map(item => <SearchItem key={item.id} title={item} />) :
          <p>nothing found</p>
        }
      </ul>
    </div>
  </section>
);

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults.results || [],
  };
}

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(SearchResults);
