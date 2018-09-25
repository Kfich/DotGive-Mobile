import React from 'react';
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const showAlert = message => {
  Alert.alert(
    `${message}`
  );
};

export const showMessageAlert = (header, message) => {
  Alert.alert(
    `${header}`,
    `${message}`,
    [
      { text: 'Ok', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: true }
  );
};
