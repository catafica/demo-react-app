import React, { Component } from 'react';
import DogBreed from './dogBreed/dogBreed';
import dogsLogo from '../../assets/images/downtown-dogs4.jpg';
import './sideMenu.css';
import * as sideMenuActions from '../../store/actions/sideMenu';
import { connect } from 'react-redux';


export class SideMenu extends Component {


 state = {
   dogLogoAppear :false,
   dogBreeds: [],
   search:''
 }

 componentDidMount = () => {
   this.props.initiateDogs();
   this.makeLogoAppear();
   this.addDogBreeds();
 }

 makeLogoAppear = () => {
   setTimeout( () => {
     this.setState({dogLogoAppear: true});
   },800)
 }

 addDogBreeds = () => {
  setTimeout( () => {
    this.setState({dogBreeds: this.props.dogList});
   }, 800)
 }


  render = () => {

    let formGroup = 'form-group';
    let imgClassList = 'img-responsive myLogo';
    if (this.state.dogLogoAppear){
      imgClassList = 'img-responsive myLogo animated';
      formGroup = 'form-group animated';
    }

    return (
      <div className="sideNav">
          <a style={{marginTop:'-10px'}}>
            <img className={imgClassList} src={dogsLogo}></img>
          </a>
          <div className={formGroup}>
            <label>Choose dog type:</label>
            <input
             onChange={event => this.setState({search: event.target.value})}
             type="text"
             id="dogType"
             className="form-control"
             name="dogType"
             placeholder="exp. akita"
             >
             </input>
          </div>
          <div style={{height:'65vh', width:'100%', overflow:'scroll', overflowX:'hidden'}}>
          {
            this.state.dogBreeds.map( (dog, i)=> {
            const {search} = this.state;
            if ( search !== '' && dog.name.toLowerCase().indexOf(search.toLowerCase()) === -1){
              return null;
            }

            return (
               <DogBreed
                  key={i}
                  name={dog.name}
                  id={dog.id}
                  activated={dog.activation}
                  clicked={() => this.props.activate(dog.id)}
                />
              )
          })
          }
          </div>
          <div>
            <i className="glyphicon glyphicon-menu-down"></i>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogTypes: state.dogTypes,
    dogList: state.dogList
  };
};

const mapDispatchToProps = dispatch => {
  return{
    onAddDog: (name, activation) => dispatch(sideMenuActions.addDog(name,activation)),
    activate: (id) => dispatch(sideMenuActions.activate(id)),
    initiateDogs: () => dispatch(sideMenuActions.initDogs())
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
