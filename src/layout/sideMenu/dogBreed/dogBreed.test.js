import React from 'react';
import { shallow } from 'enzyme';
import DogBreed from './dogBreed';


describe('DogBreed', () => {

  const mockClicked = jest.fn();
  const props = {activated: false, clicked:mockClicked}
  const dogBreed = shallow(<DogBreed {...props} />);

  it('renders properly', () => {
    expect(dogBreed).toMatchSnapshot();
  })

  it('initializes the `show` and `dogName` properties in the state', () => {
    expect(dogBreed.state()).toEqual({show: false, dogName:'none'});
  })

  describe('after `componentDidMount()` was called', () => {
    beforeEach( () => {
      dogBreed.instance().componentDidMount();
    })

    describe('expects the `updateStateProperties()` function to be called', () => {
        beforeEach( () => {
          dogBreed.instance().updateStateProperties();
        })

        it('expects the state `dogName` property to be updated after a few miliseconds', () => {
          setTimeout( () => {        
            expect(dogBreed.state().dogName).not.toBe('none')
          }, 801)
        })
        it('expects the state `show` property to be updated after a few miliseconds', () => {
          setTimeout( () => {
            expect(dogBreed.state().show).toBe(true);
          }, 801)
        })
    })
  })

  describe('after the `render()` method was called', () =>{
    beforeEach( () => {
      dogBreed.instance().render();
    })

    it('expects the `props.activated` to be false initialy', () => {
      expect(dogBreed.instance().props.activated).toBe(false);
    })

    it('expects the `state.show property to be false initaly`', () => {
      expect(dogBreed.state().show).toBe(false);
    })
    it('expects the `state.show` property to be true after a few miliseconds', () => {
      setTimeout( () => {
        expect(dogBreed.state().show).toBe(true);
      }, 801)
    })
    describe('after clicking on a dog breed', () => {
      beforeEach( () => {
        dogBreed.find('a').simulate('click');
      })
      it('expect to fire the `props.clicked`', () => {
        expect(mockClicked).toHaveBeenCalled();
      })
    })
  })



})
