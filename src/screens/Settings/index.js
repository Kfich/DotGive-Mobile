import React, { Component } from 'react';
import { View} from 'react-native';
import { baseFont } from '../../constants/theme';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { Content, Form, Item, CardItem, Input, Label, Header, Left, Body, Segment, Right, Title, Button, Text } from 'native-base';


export class Settings extends Component {

  static navigationOptions = {
    header: null,
  };

  showHome=()=>{
    this.props.navigation.navigate(HOME_SCREEN)
  }


  render() {
    return(
      <View style={{ flex: 1}}>
        <Grid>
          <Header style={{backgroundColor: 'white', height: 100}}>
            <Left>
              <Title style={{fontFamily: baseFont, fontSize: 30}}>Settings</Title>
            </Left>
          </Header>
          <View style={{height: 10, backgroundColor: 'white'}}/>
          <Row size={3}>
            <Content style={{backgroundColor: 'white'}}>
              <View style={{height: 10, backgroundColor: 'white'}}/>
                <TableView style={{backgroundColor: 'white'}}>
                    <Cell accessory='DisclosureIndicator' title="Contact Us" titleTextColor={'black'} onPress={this.showContactUs}/>
                    <Cell accessory='DisclosureIndicator' title="Terms & Conditions" titleTextColor={'black'} onPress={this.showTerms}/>
                    <Cell title="Logout" titleTextColor={'black'} onPress={this.logout}/>
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

export default Settings;
