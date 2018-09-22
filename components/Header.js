import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  connectStyle,
  Button,
  Icon
} from 'native-base';
import { black } from 'ansi-colors';
class HeaderTitle extends Component {
  render() {
    const styles = this.props.style;
    return (
      <Header style={styles.background}>
        <Left />
        <Body>
          <Title style={styles.textContent}>InstantGram</Title>
        </Body>
        <Right>
        <Button transparent>
            <Icon style={{color: black}} type="FontAwesome" name="send" />
        </Button>
        </Right>
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
