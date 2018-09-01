import React, { Component } from 'react';
import { StyleSheet, Image, Button, Text, View, TouchableOpacity, AppRegistry } from 'react-native';

export default class ImageButton extends Component {
  // Init
  constructor (props) {
    super(props);

    this.state = {
      title: props.title,
      type: props.type,
      isRemoteImage: props.isRemoteImage,
      height: props.height,
      width: props.width,
      imagePath: props.imagePath,
      buttonAction: props.buttonAction,
      backgroundColor: props.backgroundColor,
      titleColor: props.titleColor,
      borderRadius: props.borderRadius,
      selected: props.likeButtonSelected,
    };

  }

  componentDidMount () {
    // console.log("ImageButton state mount", this.state);

  }

  // Custom Methods

  // Page Setup
  render () {

    if (this.state.isRemoteImage) {

      return(
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          height: this.state.height,
          width: this.state.width,
          backgroundColor: this.state.backgroundColor }}>
          <TouchableOpacity onPress={this.props.buttonAction}>
            <Image
              source={{ uri: this.state.imagePath }}
              style={{ flex: 1.0, borderRadius: this.state.borderRadius }}
            />
            <Text style={{ fontSize: 12, fontFamily: 'Avenir', color: this.state.titleColor }}>{this.state.title}</Text>
          </TouchableOpacity>
        </View>

      );

    }

    let source = '';

    if (this.state.type === 'LOGO') {
      source = require('../../../assets/images/robot-dev.png');
    }

    return(
      <TouchableOpacity onPress={this.state.buttonAction}>
        <View style={{
          alignItems: 'center',
          height: this.state.height,
          width: this.state.width,
          backgroundColor: this.state.backgroundColor }}>
          <Image
            source={source}
            style={{ height: this.state.height, width: this.state.width }}
            resizeMode={'contain'}
          />
        </View>
      </TouchableOpacity>
    );

  }

}


const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 12,
    fontFamily: 'Avenir',
  },
  image: {
    flex: 0.8,
  },
});
