import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge,
  connectStyle
} from 'native-base';
class TabBar extends Component {
  render() {
    const styles = this.props.style;
    return (
      <Footer>
        <FooterTab style={styles.background}>
          <Button badge vertical>
            <Badge>
              <Text>2</Text>
            </Badge>
            <Icon name="home" />
          </Button>
          <Button vertical>
            <Icon name="search" />
          </Button>
          <Button vertical>
            <Icon name="add" />
          </Button>
          <Button badge vertical>
            <Badge>
              <Text>51</Text>
            </Badge>
            <Icon name="add" />
          </Button>
          <Button vertical>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
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

export default connectStyle('yourTheme.CustomComponent', styles)(TabBar);
