import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, Button, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import encoding from 'encoding-japanese';
import * as WebBrowser from 'expo-web-browser';
import merukariIcon from '../assets/images/mercari_icon.png';
import rakumaIcon from '../assets/images/rakuma_icon.png';
import paypayIcon from '../assets/images/paypay_icon.png';
import bookoffIcon from '../assets/images/bookoff_icon.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  content: {},
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
    {
      name: 'BOOK OFF Online',
      url: 'https://www.bookoffonline.co.jp',
      icon: bookoffIcon,
    },
  ];

  const encodeToSjis = (unicodeStr) => {
    const unicodeArray = [];
    for (let i = 0; i < unicodeStr.length; i++) {
      unicodeArray.push(unicodeStr.charCodeAt(i));
    }
    const sjisArray = encoding.convert(unicodeArray, {
      to: 'SJIS',
      from: 'UNICODE',
    });
    const encodedStr = encoding.urlEncode(sjisArray);
    return encodedStr.replace(/%/g, '%25');
  };

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
      case 'BOOK OFF Online':
        url = `${s.url}/display/L001,st=a,q=${encodeToSjis('ハリー')}`;
        alert(url);
        break;
    }
    return url;
  };

  const openBrower = async (url) => {
    let result = await WebBrowser.openBrowserAsync(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{product}</Text>
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
      <Button
        onPress={() => {
          const keyword = 'あ';
          const unicodeArray = [];
          for (let i = 0; i < keyword.length; i++) {
            unicodeArray.push(keyword.charCodeAt(i));
          }
          const sjisArray = encoding.convert(unicodeArray, {
            to: 'SJIS',
            from: 'UNICODE',
          });
          const encodedKeyword = encoding.urlEncode(sjisArray);
          const str = encodedKeyword.replace(/%/g, '%25');

          alert(str);
        }}
        title="debug"
      />
    </SafeAreaView>
  );
};

export default ShopScreen;
