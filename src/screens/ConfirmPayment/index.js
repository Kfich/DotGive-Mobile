import React, { Component } from 'react';
import { View, Image, InputAccessoryView } from 'react-native';
import { HOME_SCREEN } from '../../constants/routes';
import { baseFont } from '../../constants/theme';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Cell } from 'react-native-tableview-simple';
import icn_boysngirls from '../../images/icn_boysngirls.png';
import icn_checkmark from '../../images/checkmark_gradient.png';
import icn_amex from '../../images/icn_amex.png';
import { Content, Form, Item, CardItem, Input, Label, Header, Left, Body, Segment, Right, Title, Button, Text } from 'native-base';


export class ConfirmPayment extends Component {

  static navigationOptions = {
    header: null,
    tabBarVisible: false
  };

  showHome=()=>{
    this.props.navigation.navigate(HOME_SCREEN)
  }


  render() {
    return(
      <View style={{ flex: 1}}>
        <Grid>
          <Header style={{backgroundColor: 'white'}}>
          </Header>

          <Header style={{backgroundColor: 'white'}}>
            <Left>
              <Title style={{fontFamily: baseFont, fontSize: 30}}>Your gift has been sent</Title>
            </Left>
          </Header>
          <View style={{height: 20, backgroundColor: 'white'}}/>
          <Row size={3}>
            <Content style={{backgroundColor: 'white'}}>
              <CardItem>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}>Thank you for your donation to the Inaugural Michael Thomas Scholarship Camp by Michael Thomas</Text>
                <Image
                  source={icn_checkmark}
                  resizeMode={'contain'}
                />
              </CardItem>
              <CardItem>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black'}}>An electronic copy of your receipt will be available in your account donation history. Please return and donate again soon!</Text>
              </CardItem>
              <View style={{height: 20, backgroundColor: 'white'}}/>
              <View style={{height: 1, backgroundColor: 'gray', marginRight: 15, marginLeft: 15}}/>
            </Content>
          </Row>
          <Row size={.5}>
            <Content style={{backgroundColor: 'white'}}>
              <Button block style={{margin: 15}}>
                <Text>Finished</Text>
              </Button>
            </Content>
          </Row>
        </Grid>
      </View>
    );
  }
}

export default ConfirmPayment;
