import React, { Component } from 'react';
import { View, Text, Image } from 'react-native-animatable';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet } from 'react-native';
import ImageButton from '../buttons/ImageButton';

export default class CollectionViewCellBasic extends Component {

  constructor (props) {
    super(props);
    this.state = {
      title: props.title,
      titleTextColor: props.titleTextColor,
      titleFontSize: props.titleFontSize,
      message: props.message,
      messageTextColor: props.messageTextColor,
      messageFontSize: props.messageFontSize,
      isError: props.isError,
      isEmpty: props.isEmpty,
      imageType: props.imageType,
      buttonAction: props.buttonAction,
      backgroundColor: props.backgroundColor,
      imageHeight: props.imageHeight,
      imageWidth: props.imageWidth,
    };
  }

  render () {

    return(
      <View style={styles.mainContainer}>
        <Grid>
          <Col size={0.5} style={styles.col} />
          <Col size={2} style={styles.colHorizontal}>
            <View style={{ margin: 20, padding: 5, justifyContent: 'center', alignItems: 'center' }}>
              <ImageButton
                type = {'LOGO'}
                isRemoteImage = {false}
                height = {this.props.imageHeight}
                width = {this.props.imageWidth}
                buttonAction = {this.props.buttonAction}
                backgroundColor = {'#d3d3d3'}
                titleColor = {'#D3D3D3'}
                borderRadius = {0}
              />
            </View>
            <Text style = {styles.titleText}>{this.props.title}</Text>
            <Text style = {styles.messageText}>{this.props.message}</Text>
          </Col>
          <Col size={0.5} style={styles.colDemo} />
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
  },
  colDemo: {
    justifyContent: 'center',
  },
  messageText: {
    fontFamily: 'Avenir',
    color: '#808080',
    textAlign: 'center',
    fontSize: 16,
  },
  titleText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 20,
    color: '#808080',
  },
  colHorizontal: {
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
