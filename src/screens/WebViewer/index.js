import React, { Component } from 'react';
import { WebView } from 'react-native';
import { baseFont } from '../../constants/theme';
import { StyleSheet, View,  } from 'react-native';
import { Header, Left, Body, Right, Title, Button, Text } from 'native-base';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default class Webviewer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isAuth: props.isAuth ? true : false,
    };
  }
  // Custom methods
  _dismiss = () => {
    this.props.navigation.goBack();
  }

  render () {
    return (
      <View style={styles.container}>
        <Header style={{backgroundColor: 'white', height: 100}}>
          <Left>
            <Title style={{fontFamily: baseFont, fontSize: 30}}>Settings</Title>
          </Left>
        </Header>
        <WebView
          source={{ uri: 'https://www.goblockparty.com/termsandconditions' }}
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }
}
