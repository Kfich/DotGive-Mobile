import React, { Component } from 'react';
import { View} from 'react-native';
import { baseFont } from '../../constants/theme';
import { CREATE_FUND } from '../../constants/routes';
import {fund_fields} from '../../constants/forms';
import ImageButton from '../../components/buttons/ImageButton';
import GenerateForm from 'react-native-form-builder';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { Content, Form, Item, CardItem, Input, Label, Header, Left, Body, Segment, Right, Title, Button, Text } from 'native-base';


export class CreateFund extends Component {

  static navigationOptions = {
    header: null,
  };

  renderItem =(placeHolder, imageType, ref)=>{
    return (
      <View>
        <View style={{height: 8, backgroundColor: 'white'}}/>
          <CardItem style={{backgroundColor: 'white', height: 50}}>
            <Left style={{backgroundColor: 'white', width: 25}}>
              <ImageButton type={imageType} height={25} width={25} />
              <Input style={{fontFamily: baseFont, fontSize: 16, marginLeft: 12}} placeholder={placeHolder} />
            </Left>
          </CardItem>
        <View style={{height: 8, backgroundColor: 'white'}}/>
        <View style={{height: 0.5, backgroundColor: '#D6D6D6', marginHorizontal: 15}}/>
      </View>

    )
  }

  render() {
    return(
      <View style={{ flex: 1}}>
        <Grid>
          <Header style={{backgroundColor: 'white', height: 100}}>
            <Left>
              <Title style={{fontFamily: baseFont, fontSize: 30}}>Fund details</Title>
            </Left>
            <Right>
              <Button transparent>
                <Text>Next</Text>
              </Button>
            </Right>
          </Header>
          <View style={{height: 10, backgroundColor: 'white'}}/>
          <Row size={3}>
            <Content style={{backgroundColor: 'white'}}>
              {this.renderItem('Fund name', 'LOGO', 'peter')}
              {this.renderItem('Start date', 'LOGO', 'start_date')}
              {this.renderItem('End date', 'LOGO', 'end_date')}
              {this.renderItem('Description', 'LOGO', 'description')}
              {this.renderItem('Target amount', 'LOGO', 'target')}
              {this.renderItem('Support email', 'LOGO', 'support_email')}
            </Content>
          </Row>
          <Row style={{backgroundColor: 'white'}} size={.5}>

          </Row>
        </Grid>
      </View>
    );
  }
}

export default CreateFund;
