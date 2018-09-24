import React, { Component } from 'react';
import { View, Image, InputAccessoryView, TouchableHighlight, ScrollView } from 'react-native';
import { baseFont } from '../../constants/theme';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Cell } from 'react-native-tableview-simple';
import LoadingIndicator from '../../components/LoadingIndicator';
import CommentCell from '../../components/TableViewCells/CommentCell';
import RightThumbnailCell from '../../components/TableViewCells/RightThumbnailCell';
import ImageOverlay from 'react-native-image-overlay';
import { Content, Container, Card, Item, CardItem, Input, Label, Header, Left, Thumbnail,Body, Segment, Right, Title, Button, Text } from 'native-base';
import icn_tags from '../../images/icn_tags.png';
import icn_location from '../../images/icn_location.png';
import icn_target from '../../images/icn_target.png';
import icn_left_gray from '../../images/icn_left_gray.png';

import { REVIEW_PAYMENT } from '../../constants/routes';

var test = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
var test2 = 'The boys and girls clubs of america do a ton of lorem ipsum dolor sit atem, consectetur adispisicng elit'
var test3 = 'Micael Thomas is one of them boys whos out here but in like one of them huge ways. Lorem ipsum that to the bank dolor sit atem, consectetur con carnes Micael Thomas is one of them boys whos out here but in like one of them huge ways. Lorem ipsum that to the bank dolor sit atem, consectetur con carnes'


export class StoryProfile extends Component {

  static navigationOptions = {
    header: null,
    tabBarVisible: false
  };

  showPay=()=>{
    this.props.navigation.navigate(REVIEW_PAYMENT)
  }


  render() {
    return(
      <View style={{ flex: 1}}>
        <Header style={{backgroundColor: 'black', borderColor: 'black'}}>
          <Left>
            <Button transparent onPress={() => console.log("Logging!!")}>
              <Image
                source={icn_left_gray}
                resizeMode={'contain'}
              />
            </Button>
          </Left>
          <Right>
          </Right>
        </Header>
        <Grid>
        <Row size={9}>
          <ScrollView style={{backgroundColor: 'black'}}>
              <Content onPress={()=>{console.log("Hey!")}}>
                <Card style={{backgroundColor: 'black', borderColor: 'black'}}>
                  <CardItem cardBody>
                    <ImageOverlay source={{uri:'https://bgcblackhills.org/media/bgcblackhills360webcmscom/LD%20page%20header.jpg'}} overlayAlpha={.45} style={{height: 400, width: null, flex: 1 }}>
                      <View style={{flex: 0.9, backgroundColor: 'red'}}></View>
                      <CardItem style={{backgroundColor: 'transparent'}}>
                        <LoadingIndicator loadStyle = {'BAR'} indeterminate={false} progress={.8} promptText={'$63,256 raised of $100,000 goal'} />
                      </CardItem>
                    </ImageOverlay>
                  </CardItem>
                  <CardItem style={{backgroundColor: 'black'}}>
                    <Left>
                      <Text style={{fontFamily: baseFont, fontSize: 24, color: 'white'}}>Inaugural Michael Thomas Scholarship Camp</Text>
                    </Left>
                  </CardItem>
                  <View style={{height: 10, backgroundColor: 'black'}}/>
                  <View style={{height: 1, backgroundColor: 'gray', marginRight: 25, marginLeft: 25}}/>
                  <View style={{height: 10, backgroundColor: 'black'}}/>
                  <CardItem style={{backgroundColor: 'black'}}>
                    <Left>
                      <Text style={{fontFamily: baseFont, fontSize: 16, color: 'white'}}>Michael Thomas (@michael31thomas) on behalf of Boys and Girls Clubs of America (@BGCA_Clubs)</Text>
                    </Left>
                  </CardItem>
                  <View style={{height: 10, backgroundColor: 'black'}}/>
                    <Cell
                      accessory='none'
                      backgroundColor={"black"}
                      title={"Youth Education Programs and Services"}
                      titleTextColor={'white'}
                      onPress={this.showSettings}
                      image={
                        <Image
                          source={icn_tags}
                          resizeMode={'contain'}
                        />
                      }
                    />
                    <Cell
                      accessory='none'
                      backgroundColor={"black"}
                      title={"Houstin, Tx"}
                      titleTextColor={'white'}
                      onPress={this.showSettings}
                      image={
                        <Image
                          source={icn_location}
                          resizeMode={'contain'}
                        />
                      }
                    />
                    <Cell
                      accessory='none'
                      backgroundColor={"black"}
                      title={"Education, Youth Education Programs and Services"}
                      titleTextColor={'white'}
                      onPress={this.showSettings}
                      image={
                        <Image
                          source={icn_target}
                          resizeMode={'contain'}
                        />
                      }
                    />
                </Card>
                <RightThumbnailCell title={'About the fund'} message={test}/>
                <RightThumbnailCell title={'About the charity'} message={test2}/>
                <RightThumbnailCell title={'About Michael'} message={test3}/>
              </Content>
          </ScrollView>
            </Row>
            <Row size={1} style={{backgroundColor: 'white', justifyContent: 'center',  padding: 6}}>
              <Col style={{backgroundColor: 'white', justifyContent: 'center',  padding: 6}}>
                <Button block onPress={this.showPay}>
                  <Text style={{color: 'white', fontSize: 16, fontFamily: baseFont}}>Donate now</Text>
                </Button>
              </Col>
            </Row>
        </Grid>
      </View>
    );
  }
}

export default StoryProfile;
