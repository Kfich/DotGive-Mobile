import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

import { DETAILS_SCREEN } from '../../constants/routes';

// Test
import TableViewCellBasic from '../../components/TableViewCells/TableViewCellBasic';
import ImageCell from '../../components/TableViewCells/ImageCell';
import ProfileImageCell from '../../components/TableViewCells/ProfileImageCell';
import CollectionViewCellBasic from '../../components/CollectionViewCells/CollectionViewCellBasic';

export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Header',
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>this is a Home screen</Text>
        <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate(DETAILS_SCREEN)}
        />
        <CollectionViewCellBasic
              imageType={'LOGO'}
              imageHeight={100}
              imageWidth={100}
              title={'This is a collection cell'}
              messageTextColor={'black'}
              messageFontSize={'20'}
              message={'Whats good nigga this is the proto'} />
      </View>

    );
  }
}

export default HomeScreen;
