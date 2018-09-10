import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import ImageOverlay from 'react-native-image-overlay';


export default class ProfileImageCell extends Component {

  constructor (props) {
    super(props);
    this.state = {
      title: props.title,
      titleTextColor: props.titleTextColor,
      titleFontSize: props.titleFontSize,
      subTitle: props.subTitle,
      subTitleTextColor: props.subTitleTextColor,
      subTitleFontSize: props.subTitleFontSize,
      message: props.message,
      messageTextColor: props.messageTextColor,
      messageFontSize: props.messageFontSize,
      isError: props.isError,
      isEmpty: props.isEmpty,
      cellImage: props.cellImage,
      buttonAction: props.buttonAction,
      backgroundColor: props.backgroundColor,
      imageHeight: props.imageHeight,
      imageWidth: props.imageWidth,
      leftThumbnailImage: props.leftThumbnailImage,
      rightThumbnailImage: props.rightThumbnailImage,
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Body>
                <ImageOverlay
                  source={{ uri:'https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/22459514_10210707299303699_6083037342080638790_o.jpg?_nc_cat=0&oh=1f819fb0dc8ace8265da9c568de2e708&oe=5BB79AA7' }}
                  height={175}
                  overlayAlpha={.65}>
                </ImageOverlay>
                <CardItem header bordered>
                  <Text>toolbar here</Text>
                </CardItem>
                <Text>
                  Title Goes Here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Some text here to outline something Some text here to outline something</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Text>1,298 Donations to date</Text>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
