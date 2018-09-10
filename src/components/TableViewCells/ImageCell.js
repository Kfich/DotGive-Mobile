import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default class ImageCell extends Component {

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
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/22459514_10210707299303699_6083037342080638790_o.jpg?_nc_cat=0&oh=1f819fb0dc8ace8265da9c568de2e708&oe=5BB79AA7'}} />
                <Body>
                  <Text>Save The Children Fund</Text>
                  <Text note>Hosted by: Kevin Fich</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri:'http://www.artmuseumgr.org/wp-content/uploads/2018/03/VisitHeader_960@2x.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
