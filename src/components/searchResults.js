import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchItem from './searchItem';

const SearchResults = ({ searchResults }) => (
  <section>
    {console.log('searchResults:', searchResults)}
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
