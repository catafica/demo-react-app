import axios from 'axios';
import { put, delay } from 'redux-saga/effects';
import * as dogCardActions from '../actions/dogCard';
// import { delay } from 'redux-saga';



export function* initImagesSaga(action){
  try {
    yield put(dogCardActions.setLoadingImageTrue()) 
    const response = yield axios.get('https://dog.ceo/api/breed/' + action.payload + '/images');
    yield delay(500);
    yield put(dogCardActions.setLoadingImageFalse())
    const images = yield put(dogCardActions.setImagesByBreed(response.data.message))
    const a = yield Math.floor(Math.random() * images.value.length);
    yield put(dogCardActions.setImageUrl(images.value[a]))
  } catch(e){

  }
}
