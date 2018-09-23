import React, { Component } from 'react';
import { ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class CommentCell extends Component {

  render() {
    return (
        <ListItem avatar style={{backgroundColor: 'white'}}>
          <Left>
            <Thumbnail source={{ uri: 'https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/22459514_10210707299303699_6083037342080638790_o.jpg?_nc_cat=0&oh=1f819fb0dc8ace8265da9c568de2e708&oe=5BB79AA7' }} />
          </Left>
          <Body>
            <Text>Patrick Willis</Text>
            <Text note>Doing what you like will always keep you happy.. Glad yall saving these kids</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>
    );
  }
}
