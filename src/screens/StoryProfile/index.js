import React, { Component } from 'react';
import { View, Image, InputAccessoryView, TouchableHighlight, ScrollView } from 'react-native';
import { baseFont } from '../../constants/theme';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Cell } from 'react-native-tableview-simple';
import CommentCell from '../../components/TableViewCells/CommentCell';
import RightThumbnailCell from '../../components/TableViewCells/RightThumbnailCell';
import ImageOverlay from 'react-native-image-overlay';
import { Content, Container, Card, Item, CardItem, Input, Label, Header, Left, Thumbnail,Body, Segment, Right, Title, Button, Text } from 'native-base';
import icn_tags from '../../images/icn_tags.png';
import icn_location from '../../images/icn_location.png';
import icn_target from '../../images/icn_target.png';


export class StoryProfile extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return(
      <View style={{ flex: 1}}>
        <Header style={{backgroundColor: 'black'}}>
          <Left>
            <Button transparent onPress={() => console.log("Logging!!")}>
              <Text style={{color: 'white'}}>Done</Text>
            </Button>
          </Left>
          <Right>
          </Right>
        </Header>
        <Grid>
          <ScrollView>
          <Row size={3}>
            <Container style={{backgroundColor: 'black'}}>
              <Content onPress={()=>{console.log("Hey!")}}>
                <Card style={{backgroundColor: 'black'}}>
                  <CardItem cardBody>
                    <ImageOverlay source={{uri:'https://bgcblackhills.org/media/bgcblackhills360webcmscom/LD%20page%20header.jpg'}} overlayAlpha={.45} style={{height: 400, width: null, flex: 1 }}>
                      <View style={{flex: 0.9, backgroundColor: 'red'}}></View>
                      <CardItem style={{backgroundColor: 'transparent'}}>
                        <Text style={{flex: 1, color: 'white'}}>Progress bar here</Text>
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
                <CommentCell />
                <CommentCell />
                <CommentCell />
              </Content>
            </Container>
          </Row>
          </ScrollView>
        </Grid>
      </View>
    );
  }
}

export default StoryProfile;
