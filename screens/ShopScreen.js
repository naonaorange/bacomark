import React from 'react';
import { StyleSheet, SafeAreaView, Button, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';
import merukariIcon from '../assets/images/mercari_icon.png';
import rakumaIcon from '../assets/images/rakuma_icon.png';
import paypayIcon from '../assets/images/paypay_icon.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const ShopScreen = (props) => {
  const { route } = props;
  const { product } = route.params;
  const shops = [
    {
      name: 'メルカリ',
      url: 'https://www.mercari.com/jp',
      icon: merukariIcon,
    },
    {
      name: 'ラクマ',
      url: 'https://fril.jp',
      icon: rakumaIcon,
    },
    {
      name: 'PayPayフリマ',
      url: 'https://paypayfleamarket.yahoo.co.jp',
      icon: paypayIcon,
    },
  ];

  const createUrl = ({ shop, product }) => {
    let url = '';
    const s = shops.find((i) => i.name === shop.name);
    switch (s.name) {
      case 'メルカリ':
        url = `${s.url}/search/?keyword=${product}`;
        break;
      case 'ラクマ':
      case 'PayPayフリマ':
        url = `${s.url}/search/${product}`;
        break;
      default:
        break;
    }
    return url;
  };

  const openBrower = async (url) => {
    let result = await WebBrowser.openBrowserAsync(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item, index }) => (
          <ListItem
            key={index.toString()}
            bottomDivider
            onPress={() => {
              openBrower(createUrl({ shop: item, product }));
            }}
          >
            <Avatar source={item.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.url}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default ShopScreen;
