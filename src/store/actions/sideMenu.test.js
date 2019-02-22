import * as actionTypes from './actionTypes';
import * as sideMenuActions from './sideMenu';


it('creates an action to add a dog', () => {
  const dog = {name: 'akita', id: new Date(), activation: false}
  const expectedAction = { type: actionTypes.ADD_DOG, value:dog.name, activation:dog.activation};

  expect(sideMenuActions.addDog(dog.name, dog.activation)).toEqual(expectedAction);
})

it('creates an action to activate a property', () => {
  const id = new Date();
  const expectedAction = { type: actionTypes.ACTIVATE, id};

  expect(sideMenuActions.activate(id)).toEqual(expectedAction);
})


it('creates an action that initiates dog list', () => {

  const expectedAction = { type: actionTypes.INIT_DOGS};

  expect(sideMenuActions.initDogs()).toEqual(expectedAction);
})

it('creates an action to add the dog list to the existing array', () =>{
    const list = [{name:'akita', id: new Date(), activation: false}];
    const expectedAction = { type: actionTypes.ADD_DOG_LIST, list};

    expect(sideMenuActions.addDogList(list)).toEqual(expectedAction);
})
