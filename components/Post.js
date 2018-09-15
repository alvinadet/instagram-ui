import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';
export default class CardImageExample extends Component {
  state = {
    data: [
      {
        nama: 'alvin',
        image:
          'https://www.wandarafania.com/wp-content/uploads/2018/01/Ragam-Manfaat-Buah-Salak-Serta-Kandungan-Gizinya.jpg'
      },
      {
        nama: 'sodo',
        image:
          'https://www.sunpride.co.id/wp-content/uploads/2018/04/rom_32901.jpg'
      },
      {
        nama: 'anggih',
        image:
          'https://cdns.klimg.com/vemale.com/headline/650x325/2018/09/4-alasan-kenapa-sebaiknya-kamu-konsumsi-buah-pisang-setiap-hari.jpg'
      },
      {
        nama: 'sodo',
        image:
          'https://www.sunpride.co.id/wp-content/uploads/2018/04/rom_32901.jpg'
      }
    ]
  };
  render() {
    return this.state.data.map((datum, key) => {
      return (
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'Image URL' }} />
              <Body>
                <Text>{datum.nama}</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: datum.image }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      );
    });
  }
}
