import React, { Component } from 'react';
import { HeaderMenu, TabBar, Post } from '../components';
import { Root, Container, Content } from 'native-base';
export default class componentName extends Component {
  render() {
    return (
      <Root>
        <HeaderMenu />
        <Container>
          <Content>
            <Post />
          </Content>
        </Container>
        <TabBar />
      </Root>
    );
  }
}
