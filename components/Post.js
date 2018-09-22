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
        id: 1,
        nama: 'alvin',
        image:
          'https://www.wandarafania.com/wp-content/uploads/2018/01/Ragam-Manfaat-Buah-Salak-Serta-Kandungan-Gizinya.jpg'
      },
      {
        id: 2,
        nama: 'sodo',
        image:
          'https://www.sunpride.co.id/wp-content/uploads/2018/04/rom_32901.jpg'
      },
      {
        id: 3,
        nama: 'anggih',
        image:
          'https://cdns.klimg.com/vemale.com/headline/650x325/2018/09/4-alasan-kenapa-sebaiknya-kamu-konsumsi-buah-pisang-setiap-hari.jpg'
      },
      {
        id: 4,
        nama: 'sodo',
        image:
          'https://www.sunpride.co.id/wp-content/uploads/2018/04/rom_32901.jpg'
      }
    ]
  };
  render() {
    return this.state.data.map((datum, id) => {
      return (
        
        <Card key={id}>
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
                <Icon  name="heart" />
              </Button>
              <Button transparent>
                <Icon  type="FontAwesome" name="comment" />
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Icon active name="bookmarks" />
              </Button>
            </Right>
          </CardItem>
          <CardItem>
          <Body>
            <Text>lorem ipsum  </Text>
          </Body>
          </CardItem>
        </Card>
        
      );
    });
  }
}
