import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  connectStyle
} from 'native-base';
class HeaderTitle extends Component {
  render() {
    const styles = this.props.style;
    return (
      <Header style={styles.background}>
        <Left />
        <Body>
          <Title style={styles.textContent}>InstantGram</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
const styles = {
  background: {
    backgroundColor: 'white'
  },
  textContent: {
    color: 'black'
  }
};

export default connectStyle('yourTheme.CustomComponent', styles)(HeaderTitle);
