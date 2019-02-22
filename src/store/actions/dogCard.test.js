import * as actionTypes from './actionTypes';
import * as dogCardActions from './dogCard';

it('creates an action to set images by breed', () => {
  const list = ['url', 'url2'];
  const expectedAction = { type: actionTypes.SET_IMAGES_BY_BREED, value:list};

  expect(dogCardActions.setImagesByBreed(list)).toEqual(expectedAction);
})

it('sets the current image url', () => {
  const url = 'http://example.com';
  const expectedAction = { type: actionTypes.SET_IMAGE_URL, value: url};

  expect(dogCardActions.setImageUrl(url)).toEqual(expectedAction);
})

it('sets `true` the loadingImage state in the reducer', () => {
  const expectedAction = { type: actionTypes.SET_LOADING_IMAGE_TRUE};
  expect(dogCardActions.setLoadingImageTrue()).toEqual(expectedAction);
})

it('sets `false` the loadingImage state in the reducer', () => {
  const expectedAction = { type: actionTypes.SET_LOADING_IMAGE_FALSE};
  expect(dogCardActions.setLoadingImageFalse()).toEqual(expectedAction);
})

it('creates action to initiate images', () => {
  const dogType = 'Akita';
  const expectedAction = { type: actionTypes.INIT_IMAGES, payload: dogType};
  expect(dogCardActions.initiateImages(dogType)).toEqual(expectedAction);
})
