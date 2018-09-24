import React, { Component } from 'react';
import { View, Image, InputAccessoryView } from 'react-native';
import { PAYMENT_METHOD, CONFIRM_PAYMENT } from '../../constants/routes';
import { baseFont } from '../../constants/theme';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Cell } from 'react-native-tableview-simple';
import icn_boysngirls from '../../images/icn_boysngirls.png';
import icn_amex from '../../images/icn_amex.png';
import { Content, Form, Item, CardItem, Input, Label, Header, Left, Body, Segment, Right, Title, Button, Text } from 'native-base';


export class ReviewPayment extends Component {

  static navigationOptions = {
    header: null,
    tabBarVisible: false
  };

  showPaymentMethod=()=>{
    this.props.navigation.navigate(PAYMENT_METHOD)
  }

  showConfirm=()=>{
    this.props.navigation.navigate(CONFIRM_PAYMENT)
  }


  render() {
    return(
      <View style={{ flex: 1}}>
        <Grid>
          <Header style={{backgroundColor: 'white'}}>
            <Left>
              <Button transparent onPress={() => console.log("Logging!!")}>
                <Text>Back</Text>
              </Button>
            </Left>
            <Right>
            </Right>
          </Header>

          <Header style={{backgroundColor: 'white'}}>
            <Left>
              <Title style={{fontFamily: baseFont, fontSize: 30}}>Review your gift</Title>
            </Left>
          </Header>
          <View style={{height: 20, backgroundColor: 'white'}}/>
          <Row size={3}>
            <Content style={{backgroundColor: 'white'}}>
              <CardItem>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}>Inaugural Michael Thomas Scholarship Camp by Michael Thomas</Text>
                <Image
                  source={icn_boysngirls}
                  resizeMode={'contain'}
                />
              </CardItem>
              <CardItem>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black'}}>In support of Boys and Girls Clubs of America</Text>
              </CardItem>
              <View style={{height: 1, backgroundColor: 'gray', marginRight: 15, marginLeft: 15}}/>
              <View style={{height: 10, backgroundColor: 'white'}}/>
              <Cell
                accessory='DisclosureIndicator'
                backgroundColor={"white"}
                title="American Express 1008"
                titleTextColor={'black'}
                onPress={this.showPaymentMethod}
                image={
                  <Image
                    source={icn_amex}
                    resizeMode={'contain'}
                  />
                }
              />
              <View style={{height: 10, backgroundColor: 'white'}}/>
              <View style={{height: 1, backgroundColor: 'gray', marginRight: 15, marginLeft: 15}}/>
              <View style={{height: 10, backgroundColor: 'white'}}/>
                <CardItem>
                  <Button bordered dark style={{marginTop: 3, marginBottom: 3, marginRight: 3}}>
                    <Text>$1</Text>
                  </Button>
                  <Button bordered dark style={{marginTop: 3, marginBottom: 3, marginRight: 3}}>
                    <Text>$10</Text>
                  </Button>
                  <Button style={{marginTop: 3, marginBottom: 3, marginRight: 3}}>
                    <Text>$15</Text>
                  </Button>
                  <Button bordered dark style={{marginTop: 3, marginBottom: 3, marginRight: 3}}>
                    <Text>$20</Text>
                  </Button>
                  <Button bordered dark style={{marginLeft: 5, marginTop: 3, marginBottom: 3}}>
                    <Text>Custom</Text>
                  </Button>
                </CardItem>
              <View style={{height: 10, backgroundColor: 'white'}}/>
              <View style={{height: 1, backgroundColor: 'gray', marginRight: 15, marginLeft: 15}}/>
              <View style={{height: 10, backgroundColor: 'white'}}/>
                <CardItem>
                  <Left>
                    <Text>Destination Amount</Text>
                  </Left>
                  <Body></Body>
                  <Right>
                    <Text>{"$15.00"}</Text>
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text>Fees</Text>
                  </Left>
                  <Body></Body>
                  <Right>
                    <Text>{"$0.59"}</Text>
                  </Right>
                </CardItem>
              <View style={{height: 10, backgroundColor: 'white'}}/>
              <View style={{height: 1, backgroundColor: 'gray', marginRight: 15, marginLeft: 15}}/>
              <CardItem>
                <Left>
                  <Text>{'Total (USD)'}</Text>
                </Left>
                <Body></Body>
                <Right>
                  <Text>{"$15.59"}</Text>
                </Right>
              </CardItem>
            </Content>
          </Row>
          <Row size={.5}>
            <Content style={{backgroundColor: 'white'}}>
              <Button block  onPress={this.showConfirm}  style={{margin: 15}}>
                <Text>Confirm donation • $15.59</Text>
              </Button>
            </Content>
          </Row>
        </Grid>
      </View>
    );
  }
}

export default ReviewPayment;
