import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import * as Routes from '../../constants/routes';

import {
} from '../main';

import {
    DetailsScreen,
    HomeScreen,
    Screen1,
    Screen2,
    ReviewPayment,
    PaymentMethod,
    AddPayment,
    StoryProfile,
    UserProfile,
} from '../../screens';

const HomeStack = StackNavigator({
  [Routes.HOME_SCREEN]: {screen: HomeScreen},
  [Routes.DETAILS_SCREEN]: {screen: DetailsScreen},
  [Routes.REVIEW_PAYMENT]: {screen: ReviewPayment},
  [Routes.PAYMENT_METHOD]: {screen: PaymentMethod},
  [Routes.ADD_PAYMENT]: {screen: AddPayment},
  [Routes.STORY_PROFILE]: {screen: StoryProfile},

});

const SearchStack = StackNavigator({
  [Routes.SCREEN_1]: {screen: Screen1},
  [Routes.SCREEN_2]: {screen: Screen2},
},{ headerMode: `${Platform.OS === 'ios' ? 'float' : 'screen'}` });

const CreateStack = StackNavigator({
  [Routes.SCREEN_1]: {screen: Screen1},
  [Routes.SCREEN_2]: {screen: Screen2},
},{ headerMode: `${Platform.OS === 'ios' ? 'float' : 'screen'}` });

const ProfileStack = StackNavigator({
    [Routes.USER_PROFILE]: {screen: UserProfile},
},{ headerMode: `${Platform.OS === 'ios' ? 'float' : 'screen'}` });

const SettingsStack = StackNavigator({
  [Routes.SCREEN_1]: {screen: Screen1},
  [Routes.SCREEN_2]: {screen: Screen2},
},{ headerMode: `${Platform.OS === 'ios' ? 'float' : 'screen'}` });



export const MainTabNavigator = TabNavigator({
    Home: { screen: HomeStack },
    Create: {screen: CreateStack},
    Profile: { screen: ProfileStack },
    Settings: {screen: SettingsStack}
}, {});

export default MainTabNavigator;
