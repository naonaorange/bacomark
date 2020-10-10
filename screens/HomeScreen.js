import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, Button, FlatList } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { getProducts } from '../reducks/products/selectors';
import { searchProduct, clearProduct } from '../reducks/products/operations';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  content: {},
});

const HomeScreen = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ListItem
            bottomDivider
            onPress={() => {
              navigation.navigate('Shop');
            }}
          >
            <Icon name="attachment" />
            <ListItem.Content>
              <ListItem.Title>{item}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <Button
        style={styles.content}
        onPress={() => {
          navigation.navigate('Reader');
        }}
        title="Read the barcode"
      />
      <Button
        style={styles.content}
        onPress={() => {
          dispatch(searchProduct('4901330512378'));
        }}
        title="add"
      />
      <Button
        style={styles.content}
        onPress={() => {
          dispatch(clearProduct());
        }}
        title="clear"
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
