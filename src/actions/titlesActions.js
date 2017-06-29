import * as actionTypes from '../constants/actionTypes';
import tmdbApi from '../utils/tmdbApi';

export function requestTitleData(id) {
  return {
    type: actionTypes.REQUEST_TITLE_DATA,
    id,
  };
}

export function recieveTitleData(id, details, videos) {
  return {
    type: actionTypes.RECIEVE_TITLE_DATA,
    id,
    details,
    videos,
  };
}

export const fetchTitleData = titleId => (dispatch) => {
  dispatch(requestTitleData(titleId));
  const details = tmdbApi.getDetails(titleId);
  const videos = tmdbApi.getVideos(titleId);
  return Promise.all([details, videos])
    .then(
      responses => dispatch(recieveTitleData(titleId, ...responses))
    );
};
