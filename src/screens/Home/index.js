import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';


import { DETAILS_SCREEN } from '../../constants/routes';

// Test
import TableViewCellBasic from '../../components/TableViewCells/TableViewCellBasic';
import ImageCell from '../../components/TableViewCells/ImageCell';
import ProfileImageCell from '../../components/TableViewCells/ProfileImageCell';
import CollectionViewCellBasic from '../../components/CollectionViewCells/CollectionViewCellBasic';
import StoryCollectionViewCell from '../../components/CollectionViewCells/StoryCollectionViewCell';

export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Explore',
    headerMode: 'none',
    header: null
  };

  showStoryProfile=()=>{
    this.props.navigation.navigate(DETAILS_SCREEN)
  }


  render() {
    return (
      <View style={{flex: 1}}>
        <Header searchBar style={{backgroundColor: 'white', height: 75}}>
          <Item style={{backgroundColor: 'white'}}>
            <Input placeholder="Try NFLPA" style={{backgroundColor: '#f1f3f4'}}/>
          </Item>
        </Header>
        <Button transparent onPress={this.showStoryProfile}>
          <Text>show</Text>
        </Button>
        <ScrollView style={{backgroundColor: 'blue'}}>
          <StoryCollectionViewCell selectPost={this.showStoryProfile.bind(this)}/>
        </ScrollView>
      </View>

    );
  }
}

export default HomeScreen;
