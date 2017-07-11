import { expect } from 'chai';
import searchResults from './search';
import * as actionTypes from '../constants/actionTypes';

describe('search resucer', () => {

  it('should return initial state', () => {
    expect(searchResults(undefined, {})).to.eql(
      {
        isFetching: false,
        results: null,
      }
    );
  });

  it('should handle REQUEST_SEARCH_RESULTS', () => {
    expect(
      searchResults( undefined, { type: actionTypes.REQUEST_SEARCH_RESULTS })
    ).to.eql(
      {
        isFetching: true
      }
    );
  });

  it('should handle RECIEVE_SEARCH_RESULTS', () => {
    expect(
      searchResults(
        { isFetching: true },
        {
          type: actionTypes.RECIEVE_SEARCH_RESULTS,
          results: [ { test: 'test'} ]
        })
    ).to.eql(
      {
        isFetching: false,
        results: [
          { test: 'test' }
        ]
      }
    );
  });

});
