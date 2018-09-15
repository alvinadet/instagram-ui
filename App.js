import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import { Root } from 'native-base';
import { Home } from './page';

export default class App extends Component {
  state = {
    loading: true
  };
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return <Home />;
  }
}
