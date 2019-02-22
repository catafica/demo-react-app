import React, { Component } from 'react';
import './dogCard.css';
import { connect } from 'react-redux';
import Loader from '../../UI/loader/loader';
import * as dogCardActions from '../../../store/actions/dogCard';
import { bindActionCreators } from 'redux';

export class DogCard extends Component{
  constructor(props) {
    super(props);
  }

  state = {
    dogName: 'none'
  }


  componentDidUpdate = (prevProps) => {
    if (this.props.currentDogName !== this.state.dogName){
        this.props.initImages(this.props.currentDogName);
        this.setState({dogName: this.props.currentDogName});
    }
  }

  changeSelectedPicture = () => {
    var a = Math.floor(Math.random() * this.props.selectedImageList.length);
    this.props.setCurrentImage(this.props.selectedImageList[a]);
  }

  render(){
    if(this.props.currentDogName === 'Select a dog breed'){
           return null;
        }

      let image = (<Loader />);

      if (this.props.loadingState === true){
         image = (<Loader />);
      }
      if (this.props.loadingState === false){
        image = (<img className="img-responsive dog-image" src={this.props.currentImage}></img>)
      }

      return(
            <div className="imageContainer no-padding">
                <a>
                  {image}
                </a>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <h2 className="cardTitle">{this.state.dogName.charAt(0).toUpperCase() + this.state.dogName.slice(1)}</h2>
                <button onClick={this.changeSelectedPicture} className="btn btn-warning nextButton">Next <span className="glyphicon glyphicon-menu-right"></span></button>
                </div>
            </div>
      );
  }

}


const mapStateToProps = state => {
  return {
    currentDogName : state.selectedDog,
    currentImage: state.imageUrl,
    selectedImageList: state.allImagesByBreed,
    loadingState: state.loadingImageState
  };
};

const mapDispatchToProps = dispatch => {
  return{
    setImageList: (list) => dispatch(dogCardActions.setImagesByBreed(list)),
    setCurrentImage: (url) => dispatch(dogCardActions.setImageUrl(url)),
    setLoadingTrue: () => dispatch(dogCardActions.setLoadingImageTrue()),
    setLoadingFalse: () => dispatch(dogCardActions.setLoadingImageFalse()),
    initImages: (dogType) => dispatch(dogCardActions.initiateImages(dogType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DogCard);
