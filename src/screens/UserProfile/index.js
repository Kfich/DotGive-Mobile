import React, { Component } from 'react';
import { View, Image, InputAccessoryView } from 'react-native';
import { baseFont } from '../../constants/theme';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Cell } from 'react-native-tableview-simple';
import { Content, Item, CardItem, Input, Header, Left, Body, Thumbnail, Right, Title, Button, Text } from 'native-base';
import gradient_purple from '../../images/gradient_purple.png';
import icn_apple_pay from '../../images/icn_apple_pay.png';

export class UserProfile extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return(
      <View style={{ flex: 1}}>
        <Grid>
          <Header style={{backgroundColor: 'white', height: 100}}>
            <Left>
              <Title style={{fontFamily: baseFont, fontSize: 30}}>Michael</Title>
              <Text note style={{fontFamily: baseFont, paddingLeft: 8}}>View and edit profile</Text>
            </Left>
            <Right>
            <Thumbnail
              source={{uri: 'https://expo.advance.net/img/55a38cb43d/width960/c48_giants26.JPG'}}/>
            </Right>
          </Header>
          <Row size={3}>
            <Content style={{backgroundColor: 'white'}}>
              <View style={{height: 10, backgroundColor: 'white'}}/>
              <CardItem>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}>Cards</Text>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}></Text>
                <Text note style={{fontFamily: baseFont, fontSize: 14, color: 'black', flex: 1}}>Add cards</Text>
              </CardItem>
              <CardItem style={{justifyContent: 'center' }}>
                <Image source={gradient_purple} resizeMode={'contain'} />
              </CardItem>
              <CardItem>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}>History</Text>
              </CardItem>
              <CardItem>
                <View style={{backgroundColor: 'white', height: 120, flex: 1, borderWidth: 0.5, borderColor: 'gray'}}>
                  <Row style={{backgroundColor: 'white', justifyContent: 'center'}}>
                    <Text style={{fontFamily: baseFont, fontSize: 14, color: 'gray', flex: 1, textAlign: 'center', paddingTop: 15}}>TOTAL DONATIONS</Text>
                  </Row>
                  <Row style={{backgroundColor: 'white', justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center', fontFamily: baseFont, fontSize: 30, color: 'blue', flex: 1}}>$8, 872</Text>
                  </Row>
                </View>
                <View style={{backgroundColor: 'white', height: 120, flex: 1, borderWidth: 1, borderColor: 'gray'}}>
                  <Row style={{backgroundColor: 'white ', justifyContent: 'center'}}>
                    <Text style={{fontFamily: baseFont, fontSize: 14, color: 'gray', flex: 1, textAlign: 'center', paddingTop: 5}}>THIS MONTH</Text>
                  </Row>
                  <Row style={{backgroundColor: 'white', justifyContent: 'center'}}>
                    <Text style={{fontFamily: baseFont, fontSize: 16, color: 'blue', flex: 1, textAlign: 'center'}}>$3, 235</Text>
                  </Row>
                  <Row style={{backgroundColor: 'white', justifyContent: 'center'}}>
                    <Text style={{fontFamily: baseFont, fontSize: 14, color: 'gray', flex: 1, textAlign: 'center', paddingTop: 5}}>THIS YEAR</Text>
                  </Row>
                  <Row style={{backgroundColor: 'white', justifyContent: 'center'}}>
                    <Text style={{fontFamily: baseFont, fontSize: 16, color: 'blue', flex: 1, textAlign: 'center'}}>$12, 476</Text>
                  </Row>
                </View>
              </CardItem>

              {/*  Right Detail Cell for transaction history  */}
              <CardItem>
                <View style={{backgroundColor: 'white', height: 120, flex: 0.8, borderColor: 'gray', justifyContent: 'center'}}>
                  <Row size={.5} style={{backgroundColor: 'white'}}>
                    <Text note style={{fontFamily: baseFont, fontSize: 14, color: 'gray', textAlign: 'left'}}>Aug 3, 2018</Text>
                  </Row>
                  <Row size={.5} style={{backgroundColor: 'white'}}>
                    <Text style={{ fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}>Boys & Girls Club for America</Text>
                  </Row>
                  <Row size={.5}>
                    <Text style={{ fontFamily: baseFont, fontSize: 14, color: 'black', flex: 1}}>Michael Thomas Inaugural Scholarship</Text>
                  </Row>
                  <Row size={.5} style={{backgroundColor: 'white'}}>
                    <Text note style={{fontFamily: baseFont, fontSize: 14, color: 'green', textAlign: 'left'}}>$80.00</Text>
                  </Row>
                </View>
                <View style={{backgroundColor: 'white', height: 120, flex: 0.2, borderWidth: 0, borderColor: 'gray', justifyContent: 'center'}}>
                  <Thumbnail
                    source={{uri: 'https://expo.advance.net/img/55a38cb43d/width960/c48_giants26.JPG'}}/>
                  </View>
              </CardItem>

              <View style={{height: 1, backgroundColor: 'gray', marginRight: 15, marginLeft: 15}}/>

              <CardItem>
                <View style={{backgroundColor: 'white', height: 120, flex: 0.8, borderColor: 'gray', justifyContent: 'center'}}>
                  <Row size={.5} style={{backgroundColor: 'white'}}>
                    <Text note style={{fontFamily: baseFont, fontSize: 14, color: 'gray', textAlign: 'left'}}>Aug 3, 2018</Text>
                  </Row>
                  <Row size={.5} style={{backgroundColor: 'white'}}>
                    <Text style={{ fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}>Boys & Girls Club for America</Text>
                  </Row>
                  <Row size={.5}>
                    <Text style={{ fontFamily: baseFont, fontSize: 14, color: 'black', flex: 1}}>Michael Thomas Inaugural Scholarship</Text>
                  </Row>
                  <Row size={.5} style={{backgroundColor: 'white'}}>
                    <Text note style={{fontFamily: baseFont, fontSize: 14, color: 'green', textAlign: 'left'}}>$45.00</Text>
                  </Row>
                </View>
                <View style={{backgroundColor: 'white', height: 120, flex: 0.2, borderWidth: 0, borderColor: 'gray', justifyContent: 'center'}}>
                  <Thumbnail
                    source={{uri: 'https://expo.advance.net/img/55a38cb43d/width960/c48_giants26.JPG'}}/>
                  </View>
              </CardItem>


            </Content>
          </Row>
        </Grid>
      </View>
    );
  }
}

export default UserProfile;
