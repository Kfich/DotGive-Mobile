import React, { Component } from 'react';
import { View} from 'react-native';
import { baseFont } from '../../constants/theme';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { Content, Form, Item, CardItem, Input, Thumbnail, Header, Left, Body, Card, Right, Title, Button, Text } from 'native-base';
import TableViewCellBasic from '../../components/TableViewCells/TableViewCellBasic';
import ImageButton from '../../components/buttons/ImageButton';

export class Following extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return(
      <View style={{ flex: 1}}>
        <Grid>
          <View style={{height: 10, backgroundColor: 'white'}}/>
          <Header style={{backgroundColor: 'white', height: 110}}>
            <Left>
              <ImageButton type={'HEART-LARGE'} height={45} width={45}/>
              <Title style={{fontFamily: baseFont, fontSize: 30, color: 'blue'}}>Following</Title>
            </Left>
          </Header>
          <View style={{height: 10, backgroundColor: 'white'}}/>
          <CardItem>
            <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black'}}>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue.</Text>
          </CardItem>
          <View style={{height: 1, backgroundColor: '#D6D6D6', marginHorizontal: 15}}/>
          <View style={{height: 10, backgroundColor: 'white'}}/>
          
          <Row size={3}>
            <Content style={{backgroundColor: 'white'}}>
              <TableViewCellBasic/>
              <TableViewCellBasic/>
              <TableViewCellBasic/>
            </Content>
          </Row>
          <Row style={{backgroundColor: 'white'}} size={.5}>

          </Row>
        </Grid>
      </View>
    );
  }
}

export default Following;
