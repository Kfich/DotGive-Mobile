import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import ImageOverlay from 'react-native-image-overlay';


export default class ProfileImageCell extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <ImageOverlay
          source={{ uri:'http://www.artmuseumgr.org/wp-content/uploads/2018/03/VisitHeader_960@2x.jpg' }}
          height={150}
          overlayAlpha={.65}
          contentPosition="center">
        </ImageOverlay>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/22459514_10210707299303699_6083037342080638790_o.jpg?_nc_cat=0&oh=1f819fb0dc8ace8265da9c568de2e708&oe=5BB79AA7'}} />
                <Body>
                  <Text>Save The Children Fund</Text>
                  <Text note>Hosted by: Kevin Fich</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <View style={styles.avatarWrapper}>
                    <Text style={styles.name}>$4,327.00</Text>
                    <Text style={styles.subtitle}>Raised To Date</Text>
                    <Button onPress={this.props.donate} block><Text> Donate </Text></Button>
                </View>
                <CardItem header bordered>
                  <Text>Mission</Text>
                </CardItem>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>1,926 Donations</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
mainContainer: {
  flex: 1.0,
  backgroundColor: '#EFEFF4',
},
stage: {
  backgroundColor: '#EFEFF4',
  paddingBottom: 20,
  paddingTop: 0,
  flex: 0.8,

},
toolbar: {
  backgroundColor: '#ffffff',
  paddingTop: 30,
  paddingBottom: 10,
  flexDirection: 'row', // Step 1
},
toolbarButton: {
  width: 60, // Step 2
  color: '#2d49e7',
  textAlign: 'center',
  fontFamily: 'Avenir',
},
toolbarButtonClear: {
  width: 60, // Step 2
  color: '#fff',
  textAlign: 'center',
  opacity: 0,
},
toolbarTitle: {
  textAlign: 'center',
  fontSize: 18,
  color: 'blue',
  fontFamily: 'Avenir',
  flex: 1, // Step 3
},
name: {
  textAlign: 'center',
  fontSize: 20,
  color: 'black',
  backgroundColor: 'transparent',
  fontFamily: 'Avenir'
},
subtitle: {
  textAlign: 'center',
  fontSize: 16,
  color: 'black',
  backgroundColor: 'transparent',
  fontFamily: 'Avenir'
},
avatar: {
  width: 100,
  height: 100,
  borderRadius: 50,
  resizeMode: 'stretch',
},
avatarWrapper: {
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  alignSelf: 'center'
},
containerBottom: {
  flex: 0.1,
  flexDirection: 'row',
  backgroundColor: '#ecf0f1',
  justifyContent: 'center',
  borderWidth: 0.25,
  borderColor: 'black',

},
buttonContainer: {
  alignItems: 'center',
  backgroundColor: '#ffffff',
  justifyContent: 'center',
  flex: 1,
},
seperator: {
  height: 8,
  backgroundColor: 'black'
},
});
