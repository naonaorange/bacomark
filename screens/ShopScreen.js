import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, Button, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { getProducts } from '../reducks/products/selectors';
import { searchProduct, clearProduct } from '../reducks/products/operations';
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
  const { navigation } = props;
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);

  const list = [
    {
      name: 'メルカリ',
      url: 'https://www.mercari.com/jp/',
      icon: merukariIcon,
    },
    {
      name: 'ラクマ',
      url: 'https://fril.jp/',
      icon: rakumaIcon,
    },
    {
      name: 'PayPayフリマ',
      url: 'https://paypayfleamarket.yahoo.co.jp/',
      icon: paypayIcon,
    },
    {
      name: 'BOOK OFF Online',
      url: 'https://www.bookoffonline.co.jp/',
      icon: bookoffIcon,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <ListItem key={index.toString()} bottomDivider>
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
