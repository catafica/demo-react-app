import React, {Component} from 'react';
import './dogBreed.css';


class DogBreed extends Component{
  state = {
    show : false,
    dogName: 'none'
  }

  updateStateProperties = () => {
    setTimeout( () => {
      this.setState({show: true});
      this.setState({dogName: this.props.name});
    },500)
  }

  componentDidMount = () => {
    this.updateStateProperties()
  }

  render(){
    var aClass = 'inactiveA';
    if (this.props.activated){
      aClass = 'activeA';
    }
    if (this.state.show && this.props.activated){
      aClass = 'activeA show';
    }
    if (this.state.show && !this.props.activated){
      aClass = 'inactiveA show';
    }


    return (
      <a className={aClass} onClick={this.props.clicked}>{this.state.dogName.charAt(0).toUpperCase() + this.state.dogName.slice(1)}</a>
    );
  }
}
export default DogBreed;
