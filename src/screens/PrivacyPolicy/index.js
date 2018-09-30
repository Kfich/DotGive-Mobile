import React, { Component } from 'react';
import { WebView } from 'react-native';
import { baseFont } from '../../constants/theme';
import { StyleSheet, View,  } from 'react-native';
import { Header, Left, Body, Right, Title, Button, Text } from 'native-base';
import icn_left_black from '../../images/icn_left_black.png';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default class PrivacyPolicy extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isAuth: props.isAuth ? true : false,
    };
  }
  // Custom methods
  goBack=()=>{
    this.props.navigation.goBack();
  }


  render () {
    return (
      <View style={styles.container}>
        <Header style={{backgroundColor: 'white', height: 100}}>
          <Left>
            <Button transparent onPress={this.goBack}>
              <Image
                source={icn_left_black}
                resizeMode={'contain'}
              />
            </Button>
            <Title style={{fontFamily: baseFont, fontSize: 30}}>Settings</Title>
          </Left>
        </Header>
        <WebView
          source={{ uri: 'https://www.google.com' }}
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }
}
