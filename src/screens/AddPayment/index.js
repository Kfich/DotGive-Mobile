import React, { Component } from 'react';
import { View, Image, InputAccessoryView } from 'react-native';
import { baseFont } from '../../constants/theme';
import ImageButton from '../../components/buttons/ImageButton';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Cell } from 'react-native-tableview-simple';
import { Content, Form, Item, CardItem, Input, Label, Header, Left, Body, Segment, Right, Title, Button, Text } from 'native-base';
import icn_credit_card from '../../images/icn_credit_card.png';
import icn_apple_pay from '../../images/icn_apple_pay.png';
import icn_left_black from '../../images/icn_left_black.png';


export class AddPayment extends Component {

  static navigationOptions = {
    header: null,
  };

  goBack=()=>{
    this.props.navigation.goBack();
  }


  render() {
    return(
      <View style={{ flex: 1}}>
        <Grid>
          <Header style={{backgroundColor: 'white'}}>
            <Left>
              <Button transparent onPress={this.goBack}>
                <Image
                  source={icn_left_black}
                  resizeMode={'contain'}
                />
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
              <CardItem style={{backgroundColor: 'white', height: 50}}>
                <Left style={{backgroundColor: 'white', width: 25}}>
                  <ImageButton type={'CARD-GRAY'} height={25} width={25} />
                  <Input style={{fontFamily: baseFont, fontSize: 16, marginLeft: 12}} placeholder="0000 0000 0000 0000" />
                </Left>
              </CardItem>

              <View style={{height: 15, backgroundColor: 'white'}}/>
              <View style={{height: 1, backgroundColor: 'gray', marginRight: 15, marginLeft: 15}}/>

              <View style={{height: 20, backgroundColor: 'white'}}/>
              <CardItem>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}>VALID TIL</Text>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}>CVV</Text>
                <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}>POSTAL CODE</Text>
              </CardItem>
              <CardItem>
                  <Input style={{fontFamily: baseFont, fontSize: 16}} placeholder="MM/YY" />
                  <Input style={{fontFamily: baseFont, fontSize: 16}} placeholder="123" />
                  <Input style={{fontFamily: baseFont, fontSize: 16}} placeholder="12345" />
              </CardItem>
            </Content>
          </Row>
        </Grid>
      </View>
    );
  }
}

export default AddPayment;
