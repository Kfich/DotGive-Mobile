import React from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import {
    addNavigationHelpers,
    NavigationActions,
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import { store } from '../app/App';

import * as Routes from '../../constants/routes';

import {
    SignInScreen,
    LoginScreen,
} from '../../screens'

import { } from '../auth';

export const AuthTabNavigator = TabNavigator({
    [Routes.SIGN_IN_SCREEN]: { screen: SignInScreen },
    [Routes.LOG_IN_SCREEN]: { screen: LoginScreen },
}, {
    headerMode: 'float',
    title: 'Header title',
    animationEnabled: true,
    swipeEnabled: true,
    backBehavior: 'none',
    tabBarOptions: {
        style: { display: 'none' }
    }
});

export default AuthTabNavigator;
