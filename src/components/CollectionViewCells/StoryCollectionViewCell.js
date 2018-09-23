import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';
import ImageOverlay from 'react-native-image-overlay';
import { baseFont } from '../../constants/theme';
import icn_share from '../../images/icn_share.png';
import icn_give from '../../images/icn_give.png';
import icn_like_empty from '../../images/icn_like_empty.png';
import icn_like_full from '../../images/icn_like_full.png';
import icn_comment from '../../images/icn_comment.png';
import icn_comment_full from '../../images/icn_comment_full.png';


export default class StoryCollectionViewCell extends Component {

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
      selectPost: props.selectPost,
    };
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor={'green'}
        key={'item.id'}
        onPress={()=>this.props.selectPost}>
        <Container>
          <Content onPress={()=>{console.log("Hey!")}}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'https://expo.advance.net/img/55a38cb43d/width960/c48_giants26.JPG'}} />
                  <Body>
                    <Text style={{fontFamily: baseFont}}>Michael Thomas</Text>
                    <Text note style={{fontFamily: baseFont}}>for Boys & Girls Club of America</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody style={{justifyContent: 'center'}}>
                <Image source={{uri:'https://bgcblackhills.org/media/bgcblackhills360webcmscom/LD%20page%20header.jpg'}} style={{height: 400, width: null, flex: .95, borderRadius: 10, alignSelf: 'center'}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Image
                      source={icn_like_full}
                      resizeMode={'contain'}
                    />
                  </Button>
                  <Button transparent>
                  <Image
                    source={icn_comment}
                    resizeMode={'contain'}
                  />
                  </Button>
                  <Button transparent>
                  <Image
                    source={icn_share}
                    resizeMode={'contain'}
                  />
                  </Button>
                </Left>
                <Body>
                </Body>
                <Right>
                  <Button transparent>
                    <Image
                      source={icn_give}
                      resizeMode={'contain'}
                    />
                  </Button>
                </Right>
              </CardItem>
              <CardItem  style={{height: 10}}>
                <Text style={{paddingHorizontal: 8, fontFamily: baseFont}}>
                  $62,271 raised of $100,000 goal
                </Text>
              </CardItem>
              <CardItem>
                <Left>
                  <Text style={{fontFamily: baseFont}}>Inaugural Michael Thomas Scholarship Camp Thank you to everyone who has put their bids in so far. Highest bid up to 1400. Will decide the winner this Saturday. All proceeds help put a graduating senior through college. @campmiket @Giants #Houston</Text>
                </Left>
              </CardItem>
              <Button transparent info style={{height: 20}}>
                <Text style={{paddingLeft: 25, color: 'gray', fontFamily: baseFont, fontSize: 16}}>View all 548 comments</Text>
              </Button>
              <View style={{height: 20, backgroundColor: 'white'}}/>
              <Button transparent info style={{height: 20}}>
                <Text style={{paddingLeft: 25, color: 'gray', fontFamily: baseFont, fontSize: 16}}>6 MINUTES AGO</Text>
              </Button>
            </Card>
          </Content>
        </Container>
      </TouchableHighlight>
    );
  }

  renderPeter() {
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
