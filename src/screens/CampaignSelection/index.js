import React, { Component } from 'react';
import { View} from 'react-native';
import { baseFont } from '../../constants/theme';
import { CREATE_FUND } from '../../constants/routes';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { Content, Form, Item, CardItem, Input, Label, Header, Left, Body, Segment, Right, Title, Button, Text } from 'native-base';


export class CampaignSelection extends Component {

  static navigationOptions = {
    header: null,
  };

  showCreateFund=()=>{
    this.props.navigation.navigate(CREATE_FUND);
  }

  render() {
    return(
      <View style={{ flex: 1}}>
        <Grid>
          <Header style={{backgroundColor: 'white', height: 100}}>
            <Left>
              <Title style={{fontFamily: baseFont, fontSize: 30}}>Start a campign</Title>
            </Left>
          </Header>
          <View style={{height: 10, backgroundColor: 'white'}}/>
          <Row size={3}>
            <Content style={{backgroundColor: 'white'}}>
              <View style={{height: 10, backgroundColor: 'white'}}/>
                <TableView style={{backgroundColor: 'white'}}>
                  <Cell accessory='DisclosureIndicator' titleTextStyle={{fontFamily: baseFont, fontSize: 16}} title="Create a Fund" titleTextColor={'black'} onPress={this.showCreateFund}/>
                  <Cell accessory='DisclosureIndicator' titleTextStyle={{fontFamily: baseFont, fontSize: 16}} title="Start an Auction" titleTextColor={'black'} onPress={this.showContactUs}/>
                  <Cell accessory='DisclosureIndicator' titleTextStyle={{fontFamily: baseFont, fontSize: 16}} title="Coordinate an Event" titleTextColor={'black'} onPress={this.showContactUs}/>
                </TableView>
              <View style={{height: 10, backgroundColor: 'white'}}/>
            </Content>
          </Row>
          <Row style={{backgroundColor: 'white'}} size={.5}>

          </Row>
        </Grid>
      </View>
    );
  }
}

export default CampaignSelection;
