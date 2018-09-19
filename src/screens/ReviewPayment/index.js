import React, { Component } from 'react';
import { View, Image, InputAccessoryView } from 'react-native';
import { HOME_SCREEN } from '../../constants/routes';
import { baseFont } from '../../constants/theme';
import { logo } from '../../images/give-logo.png';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Content, Form, Item, Input, Label, Header, Left, Body, Right, Icon, Title, Button, Text } from 'native-base';


export class ReviewPayment extends Component {

  render() {
    return(
      <View style={{ flex: 1}}>
        <Grid>
          <Header style={{backgroundColor: 'white'}}>
            <Left>
              <Button transparent light>
                <Text>Back</Text>
              </Button>
            </Left>
            <Right>
            </Right>
          </Header>

          <Header style={{backgroundColor: 'blue'}}>
            <Left>
              <Title style={{fontFamily: baseFont, fontSize: 30, color: 'white'}}>Review your gift</Title>
            </Left>
          </Header>

          <View style={{height: 50, backgroundColor: 'red'}}/>

          <Row size={1.5}>
            <Content style={{backgroundColor: 'green'}}>
              <Form>
                <Item stackedLabel>
                  <Label style={{fontFamily: baseFont, fontSize: 16, color: 'white'}}>USERNAME</Label>
                  <Input />
                </Item>
                <Item stackedLabel>
                  <Label style={{fontFamily: baseFont, fontSize: 16, color: 'white'}}>PASSWORD</Label>
                  <Input />
                </Item>
                <View style={{height: 1, backgroundColor: 'white'}}/>
              </Form>
            </Content>
          </Row>
        </Grid>
      </View>
    );
  }
}

export default ReviewPayment;
