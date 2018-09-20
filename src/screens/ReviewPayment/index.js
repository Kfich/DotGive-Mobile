import React, { Component } from 'react';
import { View, Image, InputAccessoryView } from 'react-native';
import { HOME_SCREEN } from '../../constants/routes';
import { baseFont } from '../../constants/theme';
import { logo } from '../../images/give-logo.png';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { Content, Form, Item, CardItem, Input, Label, Header, Left, Body, Segment, Right, Title, Button, Text } from 'native-base';


export class ReviewPayment extends Component {

  static navigationOptions = {
    header: null
  };

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
                <Button>
                  <Text>icn</Text>
                </Button>
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
                onPress={this.showSettings}
              />
              <View style={{height: 10, backgroundColor: 'white'}}/>
              <View style={{height: 1, backgroundColor: 'gray', marginRight: 15, marginLeft: 15}}/>
              <View style={{height: 10, backgroundColor: 'white'}}/>
              {/*<CardItem>
                <Segment style={{height: 100}}>
                  <Button first>
                    <Text>Puppies</Text>
                  </Button>
                  <Button>
                    <Text>Kittens</Text>
                  </Button>
                  <Button last active>
                    <Text>Cubs</Text>
                  </Button>
                </Segment>
                <Button style={{marginLeft: 8, marginTop: 3, marginBottom: 3}}>
                  <Text>Custom</Text>
                </Button>
              </CardItem>*/}

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
                    <Text>{"$10.00"}</Text>
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
            </Content>
          </Row>
          <Row size={.5}>
            <Content style={{backgroundColor: 'white'}}>
              <Button block style={{margin: 15}}>
                <Text>Confirm donation • $10.59</Text>
              </Button>
            </Content>
          </Row>
        </Grid>
      </View>
    );
  }
}

export default ReviewPayment;
