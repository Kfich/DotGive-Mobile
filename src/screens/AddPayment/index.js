import React, { Component } from 'react';
import { View, Image, InputAccessoryView } from 'react-native';
import { baseFont } from '../../constants/theme';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Cell } from 'react-native-tableview-simple';
import { Content, Form, Item, CardItem, Input, Label, Header, Left, Body, Segment, Right, Title, Button, Text } from 'native-base';
import icn_credit_card from '../../images/icn_credit_card.png';
import icn_apple_pay from '../../images/icn_apple_pay.png';

export class AddPayment extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return(
      <View style={{ flex: 1}}>
        <Grid>
          <Header style={{backgroundColor: 'white'}}>
            <Left>
              <Button transparent onPress={() => console.log("Logging!!")}>
                <Text>Done</Text>
              </Button>
            </Left>
            <Right>
            </Right>
          </Header>

          <Header style={{backgroundColor: 'white'}}>
            <Left>
              <Title style={{fontFamily: baseFont, fontSize: 30}}>Enter your card details</Title>
            </Left>
          </Header>
          <Row size={3}>
            <Content style={{backgroundColor: 'white'}}>
              <View style={{height: 40, backgroundColor: 'white'}}/>
              <CardItem>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}>CARD NUMBER</Text>
              </CardItem>
              <Cell
                accessory='none'
                backgroundColor={"white"}
                title="0000 0000 0000 0000"
                titleTextColor={'black'}
                onPress={this.showSettings}
                image={
                  <Image
                    source={icn_credit_card}
                    resizeMode={'contain'}
                  />
                }
              />
              <View style={{height: 15, backgroundColor: 'white'}}/>
              <View style={{height: 1, backgroundColor: 'gray', marginRight: 15, marginLeft: 15}}/>

              <View style={{height: 20, backgroundColor: 'white'}}/>
              <CardItem>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}>VALID TIL</Text>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}>CVV</Text>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}>POSTAL CODE</Text>
              </CardItem>
              <CardItem>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'gray', flex: 1}}>MM/YY</Text>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'gray', flex: 1}}>123</Text>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'gray', flex: 1}}>12345</Text>
              </CardItem>
            </Content>
          </Row>
        </Grid>
      </View>
    );
  }
}

export default AddPayment;
