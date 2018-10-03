import React, { Component } from 'react';
import { View, Image, InputAccessoryView } from 'react-native';
import { HOME_SCREEN } from '../../constants/routes';
import { baseFont } from '../../constants/theme';
import { logo } from '../../images/give-logo.png';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Content, Form, Item, Input, Label, Header, Left, Body, Right, Icon, Title, Button, Text } from 'native-base';
import Services from '../../api/Services';
import User from '../../models/User';
import {setCurrentUser} from '../../actions';
import { connect, dispatch } from 'react-redux';


class _LoginScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.services = new Services();
    //this.onLoginClick = this.onLoginClick.bind(this);
  }

  sign_in =()=>{

    // Init dict
    const auth = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.setCurrentUser(auth);
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
                  <Label style={{fontFamily: baseFont, fontSize: 16, color: 'white'}}>EMAIL</Label>
                  <Input
                    returnKeyType="next"
                    clearButtonMode="always"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.state.username}
                    onChangeText={(text) => this.setState({ email: text })}/>
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

const mapDispatchToProps = (dispatch, ownProps) => ({
    setCurrentUser: () => dispatch(setCurrentUser({email: 'stan@azula.co', password: 'azulaazula'})),
});

export const LoginScreen = connect(null, mapDispatchToProps)(_LoginScreen);

export default LoginScreen;
