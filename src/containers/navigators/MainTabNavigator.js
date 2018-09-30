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
    ConfirmPayment,
    Settings,
    Following,
    CampaignSelection,
    CreateFund,
    PrivacyPolicy
} from '../../screens';

const HomeStack = StackNavigator({
  [Routes.HOME_SCREEN]: {screen: HomeScreen},
  [Routes.DETAILS_SCREEN]: {screen: DetailsScreen},
  [Routes.REVIEW_PAYMENT]: {screen: ReviewPayment},
  [Routes.PAYMENT_METHOD]: {screen: PaymentMethod},
  [Routes.ADD_PAYMENT]: {screen: AddPayment},
  [Routes.STORY_PROFILE]: {screen: StoryProfile},
  [Routes.CONFIRM_PAYMENT]: {screen: ConfirmPayment},

});

const FollowingStack = StackNavigator({
  [Routes.FOLLOWING]: {screen: Following},
},{ headerMode: `${Platform.OS === 'ios' ? 'float' : 'screen'}` });

const CreateStack = StackNavigator({
  [Routes.CAMPAIGN_SELECTION]: {screen: CampaignSelection},
  [Routes.CREATE_FUND]: {screen: CreateFund},
},{ headerMode: `${Platform.OS === 'ios' ? 'float' : 'screen'}` });

const ProfileStack = StackNavigator({
    [Routes.USER_PROFILE]: {screen: UserProfile},
},{ headerMode: `${Platform.OS === 'ios' ? 'float' : 'screen'}` });

const SettingsStack = StackNavigator({
  [Routes.SETTINGS]: {screen: Settings},
},{ headerMode: `${Platform.OS === 'ios' ? 'float' : 'screen'}` });



export const MainTabNavigator = TabNavigator({
    Home: { screen: HomeStack },
    Following: {screen: FollowingStack},
    Create: {screen: CreateStack},
    Profile: { screen: ProfileStack },
    Settings: {screen: SettingsStack}
}, {});

export default MainTabNavigator;
