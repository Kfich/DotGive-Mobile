import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Left, Right, Title } from 'native-base';
import { baseFont } from '../../constants/theme';

import { STORY_PROFILE, REVIEW_PAYMENT } from '../../constants/routes';

// Test
import TableViewCellBasic from '../../components/TableViewCells/TableViewCellBasic';
import ImageCell from '../../components/TableViewCells/ImageCell';
import ProfileImageCell from '../../components/TableViewCells/ProfileImageCell';
import CollectionViewCellBasic from '../../components/CollectionViewCells/CollectionViewCellBasic';
import StoryCollectionViewCell from '../../components/CollectionViewCells/StoryCollectionViewCell';

export class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  showStoryProfile=()=>{
    this.props.navigation.navigate(STORY_PROFILE)
  }

  showPay=()=>{
    this.props.navigation.navigate(REVIEW_PAYMENT)
  }


  render() {
    return (
      <View style={{flex: 1}}>
        <Header style={{backgroundColor: 'white', height: 100}}>
          <Left>
            <Title style={{fontFamily: baseFont, fontSize: 30}}>Explore</Title>
          </Left>
          <Right>
            <Button transparent onPress={this.showStoryProfile}>
              <Text>show</Text>
            </Button>
            <Button transparent onPress={this.showPay}>
              <Text>show</Text>
            </Button>
          </Right>
        </Header>
        <ScrollView style={{backgroundColor: 'white'}}>
          <StoryCollectionViewCell selectPost={this.showStoryProfile.bind(this)}/>
          <StoryCollectionViewCell selectPost={this.showStoryProfile.bind(this)}/>
          <StoryCollectionViewCell selectPost={this.showStoryProfile.bind(this)}/>
        </ScrollView>
      </View>

    );
  }
}

export default HomeScreen;
