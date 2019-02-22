import React from 'react';
import { shallow } from 'enzyme';
import {SideMenu} from './sideMenu';



describe('SideMenu', () => {
  const id = new Date();
  const mockInitiateDogs = jest.fn();
  const mockDogList = jest.fn();
  const mockActivate = jest.fn();
  const props = {initiateDogs: mockInitiateDogs, dogList: mockDogList, clicked:mockActivate};
  const sideMenu = shallow(<SideMenu {...props}/>);

  it('renders properly', () => {
    expect(sideMenu).toMatchSnapshot();
  })

  it('initializes the `dogLogoAppear` property in the state', () => {
    expect(sideMenu.state().dogLogoAppear).toEqual(false);
  })

  describe('after `componentDidMount()` was called', () => {
    beforeEach(() => {
        sideMenu.instance().componentDidMount();
      });

    it('expects to `initiateDogs` prop to be called', () => {
      expect(mockInitiateDogs).toHaveBeenCalled();
    })

    describe('after the callback makeLogoAppear() has been called', () =>{
      beforeEach( () => {
        sideMenu.instance().makeLogoAppear()
      })

      it('changes the dogLogoAppear property in the state after a few miliseconds', () => {
        setTimeout( () => {
          expect(sideMenu.state().dogLogoAppear).toEqual(true);
        },801)

        })
      })
      describe('after the callback addDogBreeds() has been called', () =>{
        beforeEach( () => {
          sideMenu.instance().addDogBreeds()
        })

        it('updated the state with the dogBreeds list', () => {
          expect(sideMenu.state().dogBreeds).not.toBe([]);
        })
      })

      it('creates a DogBreed component after a few miliseconds', () => {
        setTimeout( () => {
          expect(sideMenu.find('DogBreed').exists()).toBe(true);
        },801)
      })

      describe('when typing into the `choose dog type` input', () =>{
        const dogType = 'Akita';

        beforeEach( () => {
          sideMenu.find('.form-control').simulate('change', {target: { value: dogType }});
        })

        it('updates the search in `state`', () => {
          expect(sideMenu.state().search).toEqual(dogType);
        })
      })  
      describe('when user click one of the dog breeds that appeared in the side menu', () => {
        beforeEach( () => {
          setTimeout( () => {
            sideMenu.find('DogBreed').simulate('click');
          },801)

        })

        it('expects to fire `props.activate` which dispatches the ACTIVATE action', () => {
            setTimeout( () => {
              expect(mockActivate).toHaveBeenCalledWith(id);
            }, 801)
        })
      })
    })


})
