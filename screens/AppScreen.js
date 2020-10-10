import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { getProducts } from '../reducks/products/selectors';
import { searchProduct } from '../reducks/products/operations';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const AppScreen = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);

  const list = ['a', 'b'];

  return (
    <SafeAreaView style={styles.container}>
      {products.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name="attachment" />
          <ListItem.Content>
            <ListItem.Title>{item}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
      <Button
        onPress={() => {
          navigation.navigate('Reader');
        }}
        title="Read the barcode"
      />
      <Button
        onPress={() => {
          dispatch(searchProduct('4901330512378'));
        }}
        title="debug"
      />
    </SafeAreaView>
  );
};

export default AppScreen;
