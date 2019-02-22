import React from 'react';
import { shallow } from 'enzyme';
import {DogCard} from './dogCard';


describe('DogCard', () => {

  const mockInitImages = jest.fn();
  const props = {initImages: mockInitImages, currentDogName:'Select a dog breed', loadingState:false}
  const dogCard = shallow(<DogCard {...props}/>);

  it('renders properly', () => {
    expect(dogCard).toMatchSnapshot();
  })

  it('initializes the state', () =>{
    expect(dogCard.state().dogName).toEqual('none');
  })

  describe('after componentDidUpdate() was called', () => {
    beforeEach( () => {
          dogCard.instance().componentDidUpdate();
    })

    it('expects that `props.currentDogName` to be set to initial value', () => {
      expect(dogCard.instance().props.currentDogName).toBe('Select a dog breed');

    })
    it('expects to set the `props.initImages`', () => {
        expect(mockInitImages).toHaveBeenCalled();
    })
    it('updates the dogName property in the state after a few miliseconds', () => {
        expect(dogCard.state().dogName).not.toBe('none');
    })

  })

  describe('after the `render()` function has been called', () => {
    beforeEach( () => {
      dogCard.instance().render();
    })
    it('checks value of `props.currentDogName` in order to decide to render or not the component', () => {
        expect(dogCard.instance().props.currentDogName).toBe('Select a dog breed');

    })
    it('check the value of `props.loadingState` which initialy shoudl be false', () => {
        expect(dogCard.instance().props.loadingState).toEqual(false);
    })

    describe('when user presses the next button to change the picture which is availiable only when the component is rendered', () => {
      beforeEach( () => {
        setTimeout( () => {
            dogCard.find('.btn-warning').simulate('click');
        },801)
      })
      it('expect `the changeSelectedPicture` method to be fired', () => {
        const spy = jest.spyOn(dogCard.instance(), 'changeSelectedPicture');
        setTimeout( () => {
         expect(spy).toHaveBeenCalled();
        }, 801)
      })
    })
  })


})
