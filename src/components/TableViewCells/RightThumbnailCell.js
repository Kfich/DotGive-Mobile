import React, { Component } from 'react';
import {Image, View} from 'react-native';
import { Container, Content, ListItem, Header, Left, Body, Right, Thumbnail, Text, Title, CardItem, Card } from 'native-base';
import {baseFont} from '../../constants/theme';
import {icn_boysngirls} from '../../images/icn_boysngirls.png';

export default class RightThumbnailCell extends Component {



  render() {
    return (
       <Content>
         <Card>
           <CardItem>
            <Left>
              <Title style={{fontFamily: baseFont, fontSize: 18, paddingHorizontal: 0}}>{this.props.title}</Title>
             </Left>

             <Right>
              <Thumbnail source={{uri: 'https://expo.advance.net/img/55a38cb43d/width960/c48_giants26.JPG'}} />
             </Right>
           </CardItem>
           <CardItem cardBody>
             <Text style={{fontFamily: baseFont, fontSize: 16, paddingHorizontal: 15}}>
                {this.props.message}
             </Text>
           </CardItem>
           <View style={{height: 20, backgroundColor: 'white'}}/>
         </Card>
       </Content>
   );
  }
}
