import * as actionTypes from './actionTypes';


export const setImagesByBreed = (list) => {
  return {
    type: actionTypes.SET_IMAGES_BY_BREED,
    value: list
  };
};

export  const setImageUrl = (url) => {
  return {
    type: actionTypes.SET_IMAGE_URL,
    value: url
  };
};

export  const setLoadingImageTrue = () => {
  return {
    type: actionTypes.SET_LOADING_IMAGE_TRUE
  };
};

export  const setLoadingImageFalse = () => {
  return {
    type: actionTypes.SET_LOADING_IMAGE_FALSE
  };
};

export const initiateImages = (dogType) => {
  return {
    type: actionTypes.INIT_IMAGES,
    payload: dogType
  }
}
