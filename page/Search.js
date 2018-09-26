import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Icon} from 'native-base';

export default class componentName extends Component {
  static navigationOptions= {
    tabBarLabel: "Search",
    tabBarIcon: () => (
      <Icon name="search" />
    )
  }
  render() {
    return (
      <View>
        <Text> Ini search </Text>
      </View>
    );
  }
}
