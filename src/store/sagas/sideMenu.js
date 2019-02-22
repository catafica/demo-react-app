import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as sideMenuActions from '../actions/sideMenu';
import { delay } from 'redux-saga';


export function* initDogsSaga(action){
  try {
    const response = yield axios.get('https://dog.ceo/api/breeds/list/all');
    const list = [];
    for (let key in response.data.message){
      yield put(sideMenuActions.addDog(key, false));
      list.push({name: key, id:new Date(), activation: false});
    }
    yield put(sideMenuActions.addDogList(list));
  } catch (e){

  }

}



//
// 'https://dog.ceo/api/breed/' + this.props.currentDogName +'/images'
