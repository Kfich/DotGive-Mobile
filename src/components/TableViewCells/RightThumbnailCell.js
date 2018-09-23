import React, { Component } from 'react';
import {Image, View} from 'react-native';
import { ListItem, Header, Left, Body, Right, Thumbnail, Text, Title, CardItem, Card } from 'native-base';
import {baseFont} from '../../constants/theme';
import {icn_boysngirls} from '../../images/icn_boysngirls.png';

export default class RightThumbnailCell extends Component {

  render() {
    return (
      <Header style={{backgroundColor: 'white'}}>
        <Text style={{fontFamily: baseFont, fontSize: 16, color: 'black', flex: 1}}>About the fund</Text>
      </Header>
    );
  }
}
