import { compose, createStore } from 'redux';
import rootReducer from './rootReducer';

const store = (() => {
  const finalCreateStore = compose()(createStore);
  return finalCreateStore(rootReducer);
})()

export default store;