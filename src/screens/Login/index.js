import React, { Component } from 'react';
import { View, Image, InputAccessoryView } from 'react-native';
import { HOME_SCREEN } from '../../constants/routes';
import { baseFont } from '../../constants/theme';
import { logo } from '../../images/give-logo.png';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Content, Form, Item, Input, Label, Header, Left, Body, Right, Icon, Title, Button, Text } from 'native-base';


export class LoginScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  test =()=>{
    console.log("The state", this.state);
  }

  sign_in =()=>{
    console.log("The state on signIn", this.state.username, this.state.password);
  }

  render() {
    return(
      <View style={{ flex: 1}}>
        <Grid>
          <Header style={{backgroundColor: 'blue'}}>
            <Left>
              <Button onPress={this.test} transparent light>
                <Text>Back</Text>
              </Button>
            </Left>
            <Right>
              <Button onPress={this.sign_in} transparent light>
                <Text>Sign in</Text>
              </Button>
            </Right>
          </Header>

          <Header style={{backgroundColor: 'blue'}}>
            <Left>
              <Title style={{fontFamily: baseFont, fontSize: 30, color: 'white'}}>Log In</Title>
            </Left>
          </Header>

          <View style={{height: 50, backgroundColor: 'blue'}}/>

          <Row size={1.5}>
            <Content style={{backgroundColor: 'blue'}}>
              <Form>
                <Item stackedLabel>
                  <Label style={{fontFamily: baseFont, fontSize: 16, color: 'white'}}>USERNAME</Label>
                  <Input
                    returnKeyType="next"
                    clearButtonMode="always"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.state.username}
                    onChangeText={(text) => this.setState({ username: text })}/>
                </Item>
                <Item stackedLabel>
                  <Label style={{fontFamily: baseFont, fontSize: 16, color: 'white'}}>PASSWORD</Label>
                  <Input
                    returnKeyType="next"
                    clearButtonMode="always"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({ password: text })} />
                </Item>
                <View style={{height: 1, backgroundColor: 'white'}}/>
              </Form>
            </Content>
          </Row>
        </Grid>
      </View>
    );
  }
}

export default LoginScreen;
