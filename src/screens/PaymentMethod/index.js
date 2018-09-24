import React, { Component } from 'react';
import { View, Image, InputAccessoryView } from 'react-native';
import { baseFont } from '../../constants/theme';
import { ADD_PAYMENT } from '../../constants/routes';
import { Row, Grid } from "react-native-easy-grid";
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { Content, Form, Item, CardItem, Input, Label, Header, Left, Body, Segment, Right, Title, Button, Text } from 'native-base';
import icn_amex from '../../images/icn_amex.png';
import icn_credit_card from '../../images/icn_credit_card.png';
import icn_apple_pay from '../../images/icn_apple_pay.png';
import icn_add_card from '../../images/icn_add_card.png';

export class PaymentMethod extends Component {

  static navigationOptions = {
    header: null,
    tabBarVisible: false
  };

  showAddPaymentMethod=()=>{
    this.props.navigation.navigate(ADD_PAYMENT);
  }

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
              <Title style={{fontFamily: baseFont, fontSize: 30}}>Pay with</Title>
            </Left>
          </Header>
          <Row size={3}>
            <Content style={{backgroundColor: 'white'}}>
              <CardItem>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}>Payment method: USD</Text>
              </CardItem>
              <View style={{height: 15, backgroundColor: 'white'}}/>
              <Cell
                accessory='Checkmark'
                backgroundColor={"white"}
                title="American Express 1008"
                titleTextColor={'black'}
                onPress={this.showSettings}
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
              <Cell
                accessory='none'
                backgroundColor={"white"}
                title="Apple Pay"
                titleTextColor={'black'}
                onPress={this.showSettings}
                image={
                  <Image
                    source={icn_apple_pay}
                    resizeMode={'contain'}
                  />
                }
              />
              <View style={{height: 10, backgroundColor: 'white'}}/>
              <View style={{height: 1, backgroundColor: 'gray', marginRight: 15, marginLeft: 15}}/>
              <View style={{height: 10, backgroundColor: 'white'}}/>
              <Cell
                accessory='DisclosureIndicator'
                backgroundColor={"white"}
                title="Add new method"
                titleTextColor={'black'}
                onPress={this.showAddPaymentMethod}
                image={
                  <Image
                    source={icn_add_card}
                    resizeMode={'contain'}
                  />
                }
              />
              <View style={{height: 10, backgroundColor: 'white'}}/>
            </Content>
          </Row>
        </Grid>
      </View>
    );
  }
}

export default PaymentMethod;
