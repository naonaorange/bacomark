import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Clipboard,
  Alert,
  Text,
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';
import merukariIcon from '../assets/images/mercari_icon.png';
import rakumaIcon from '../assets/images/rakuma_icon.png';
import paypayIcon from '../assets/images/paypay_icon.png';
import bookoffIcon from '../assets/images/bookoff_icon.png';
import amazonIcon from '../assets/images/amazon_icon.png';
import kakakucomIcon from '../assets/images/kakakucom_icon.png';
import rakutenIcon from '../assets/images/rakuten_icon.png';
import { MaterialIcons } from '@expo/vector-icons';

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
  const OPEN_BROWSER = 'OPEN_BROWSER';
  const COPY_TO_CLIP = 'COPY_TO_CLIP';
  const OPEN_BROWSER_WITH_CLIP = 'OPEN_BROWSER_WITH_CLIP';

  const shops = [
    {
      name: 'メルカリ',
      operation: OPEN_BROWSER_WITH_CLIP,
      url: 'https://www.mercari.com/jp',
      icon: merukariIcon,
    },
    {
      name: 'ラクマ',
      operation: OPEN_BROWSER_WITH_CLIP,
      url: 'https://fril.jp',
      icon: rakumaIcon,
    },
    {
      name: 'PayPayフリマ',
      operation: OPEN_BROWSER_WITH_CLIP,
      url: 'https://paypayfleamarket.yahoo.co.jp',
      icon: paypayIcon,
    },
    {
      name: '楽天市場',
      operation: OPEN_BROWSER_WITH_CLIP,
      url: 'https://search.rakuten.co.jp',
      icon: rakutenIcon,
    },
    {
      name: 'Amazon',
      operation: OPEN_BROWSER_WITH_CLIP,
      url: 'https://www.amazon.co.jp',
      icon: amazonIcon,
    },

    {
      name: '価格COM',
      operation: OPEN_BROWSER_WITH_CLIP,
      url: 'https://www.kakaku.com',
      icon: kakakucomIcon,
    },
    {
      name: 'BOOK OFF Online',
      operation: OPEN_BROWSER_WITH_CLIP,
      url: 'https://www.bookoffonline.co.jp',
      icon: bookoffIcon,
    },
    {
      name: 'クリップボードにコピー',
      operation: COPY_TO_CLIP,
      url: '',
      icon: 'attach-file',
    },
  ];

  const openBrower = async (url) => {
    let result = await WebBrowser.openBrowserAsync(url);
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
      case 'Amazon':
        url = `${s.url}/s?k=${product}`;
      case '楽天市場':
        url = `${s.url}/search/mall/${product}`;
        break;
      default:
        break;
    }
    return url;
  };

  const doOperation = ({ shop, product }) => {
    switch (shop.operation) {
      case OPEN_BROWSER:
        openBrower(createUrl({ shop, product }));
        break;
      case COPY_TO_CLIP:
        Clipboard.setString(product);
        Alert.alert('クリップボードにコピーしました', '', [{ text: 'OK' }], {
          cancelable: false,
        });
        break;
      case OPEN_BROWSER_WITH_CLIP:
        Clipboard.setString(product);
        Alert.alert(
          'クリップボードにコピーしました',
          '',
          [
            {
              text: 'OK',
              onPress: () => openBrower(shop.url),
            },
          ],
          {
            cancelable: false,
          }
        );
        break;
      default:
        break;
    }
  };

  const typeEquals = (type, obj) => {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return clas === type;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text></Text>
      <Text>商品名をクリップボードにコピーしてサイトを開きます</Text>
      <Text></Text>
      <FlatList
        data={shops}
        renderItem={({ item, index }) => (
          <ListItem
            key={index.toString()}
            bottomDivider
            onPress={() => {
              doOperation({ shop: item, product });
            }}
          >
            {typeEquals('String', item.icon) ? (
              <MaterialIcons name={item.icon} size={24} color="black" />
            ) : (
              <Avatar source={item.icon} />
            )}
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
