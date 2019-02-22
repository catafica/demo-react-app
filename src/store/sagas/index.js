import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { initDogsSaga } from './sideMenu';
import { initImagesSaga} from './dogCard';
// export function* watchInit(){
//   yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga)
// }
export function* watchInit(){
  yield takeEvery(actionTypes.INIT_DOGS, initDogsSaga)
}

export function* watchImageInit(){
  yield takeEvery(actionTypes.INIT_IMAGES, initImagesSaga)
}
