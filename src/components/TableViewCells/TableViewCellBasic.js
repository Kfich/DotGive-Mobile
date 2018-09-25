import React, { Component } from 'react';
import { ListItem, Left, Body, Right, Thumbnail, Text, CardItem } from 'native-base';
import {baseFont} from '../../constants/theme';
import ImageButton from '../../components/buttons/ImageButton';
import icn_oval_full from '../../images/icn_oval_full.png';


export default class TableViewCellBasic extends Component {

  render() {
    return (
      <CardItem>
        <Left>
          <Thumbnail source={{uri: 'https://expo.advance.net/img/55a38cb43d/width960/c48_giants26.JPG'}} />
          <Body>
            <Text style={{fontFamily: baseFont}}>Michael Thomas</Text>
            <Text note style={{fontFamily: baseFont}}>@therealmiket</Text>
          </Body>
        </Left>
        <Right>
          <ImageButton type={'OVAL-FULL'} height={30} width={30}/>
        </Right>
      </CardItem>
    );
  }
}
