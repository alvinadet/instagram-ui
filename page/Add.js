import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 static navigationOptions = {
    tabBarLabel: "Add",
    tabBarIcon: () => (
      <Icon name="add" />
    )
  }
  render() {
    return (
      <View>
        <Text> Ini Add </Text>
      </View>
    );
  }
}
