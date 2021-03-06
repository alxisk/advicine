import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

// prod
// export default function configureStore() {
//   return createStore(
//     rootReducer,
//     applyMiddleware(thunk)
//   );
// };

// dev
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default function configureStore() {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}
