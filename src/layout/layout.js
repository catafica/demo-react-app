import React, { Component } from 'react';
import SideMenu from './sideMenu/sideMenu';
import Container from './container/container';
import './layout.css';


class Layout extends Component{


  render(){
      return(
          <div className="fullScreen">
            <SideMenu />
            <Container />
          </div>
      );
  }

}

export default Layout;
