import React, { Component } from 'react';
import { HeaderMenu, TabBar, Post } from '../components';
import { Root, Container, Content, Icon } from 'native-base';
export default class componentName extends Component {
  static navigationOptions= {
    tabBarLabel: "Home",
    tabBarIcon: () => (
      <Icon name="home" />
    )
  }
  render() {
   
    return (
      <Root>
        <HeaderMenu />
        <Container>
          <Content>
            <Post />
          </Content>
        </Container>
      </Root>
    );
  }
}
