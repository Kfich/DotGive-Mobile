import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { HOME_SCREEN, LOG_IN_SCREEN } from '../../constants/routes';
import { baseFont } from '../../constants/theme';
import { logo } from '../../images/give-logo.png';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Left, Body, Right, Icon, Title, Button, Text } from 'native-base';


terms = "By tapping Continue or Create account, I agree to DotGive’s Terms of Service, Payments Terms of Service, and Privacy Policy."


export class SignInScreen extends Component {

  render() {
    return(
      <View style={{ flex: 1}}>
        <Grid>
          <Header style={{backgroundColor: 'blue'}}>
            <Right>
              <Text style={{fontFamily: baseFont, color: 'white'}}>Log in</Text>
            </Right>
          </Header>

          <Header style={{backgroundColor: 'blue'}}>
            <Left>
              <Image
                height={50}
                width={50}
                source={require('../../images/give-logo.png')}
              />
            </Left>
          </Header>

          <Header style={{backgroundColor: 'blue'}}>
            <Left>
              <Title style={{fontFamily: baseFont, fontSize: 30, color: 'white'}}>Welcome to DotGive.</Title>
            </Left>
          </Header>

          <Row size={1.5}>
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'blue', padding: 25 }}>
              <Button block rounded light onPress={() => this.props.navigation.navigate(HOME_SCREEN)}>
                <Text style={{fontFamily: baseFont, fontSize: 18, color: 'blue'}}>Continue with Twitter</Text>
              </Button>
              <View style={{height: 30}}/>
              <Button style={{borderColor: 'white', borderWidth: 1}} block transparent rounded onPress={() => this.props.navigation.navigate(LOG_IN_SCREEN)}>
                <Text style={{fontFamily: baseFont, fontSize: 18, color: 'white', borderColor: 'white'}}>Create Account</Text>
              </Button>
            </View>
          </Row>
          <Row size={2}>
            <View style={{ flex: 1, backgroundColor: 'blue', padding: 25 }}>
                <Text style={{fontFamily: baseFont, fontSize: 14, color: 'white'}}>{terms}</Text>
            </View>
          </Row>
        </Grid>
      </View>
    );
  }
}

export default SignInScreen;
