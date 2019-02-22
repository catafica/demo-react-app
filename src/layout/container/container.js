import React, { Component } from 'react';
import './container.css';
import pawsLogo from '../../assets/images/paws1.png';
import DogCard from './dogCard/dogCard';


class Container extends Component{



  render(){


      return(
          <div className='pageContainer'>
              <DogCard/>
          </div>
      );
  }

}

export default Container;
