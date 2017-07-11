import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import * as actionTypes from '../constants/actionTypes';
import { fetchSearchResults } from './searchActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchSearchResults', () => {

  it('calls requestSearchResults and recieveSearchResults after response', () => {
    const store = mockStore({});

    return store.dispatch(fetchSearchResults('test'))
      .then(() => {
        expect(store.getActions()).to.have.length(2);
        expect(store.getActions()[0]).to.have.property('type', actionTypes.REQUEST_SEARCH_RESULTS);
        expect(store.getActions()[1]).to.have.property('type', actionTypes.RECIEVE_SEARCH_RESULTS);
      });
  });
  
});
