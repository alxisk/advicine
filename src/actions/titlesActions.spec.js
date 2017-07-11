import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import * as actionTypes from '../constants/actionTypes';
import { fetchTitleData } from './titlesActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchTitleData', () => {

  it('calls requestTitleData and recieveTitleData after response', () => {
    const store = mockStore({});

    return store.dispatch(fetchTitleData('550'))
      .then(() => {
        expect(store.getActions()).to.have.length(2);
        expect(store.getActions()[0]).to.have.property('type', actionTypes.REQUEST_TITLE_DATA);
        expect(store.getActions()[1]).to.have.property('type', actionTypes.RECIEVE_TITLE_DATA);
      });
  });

});
