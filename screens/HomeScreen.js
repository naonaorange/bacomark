import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, Button, FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { getProducts } from '../reducks/products/selectors';
import { searchProduct, clearProduct } from '../reducks/products/operations';
import { ListItem, Icon as EleIcon } from 'react-native-elements';

const styles = StyleSheet.create({
  topItems: {
    alignItems: 'flex-end',
    backgroundColor: '#ffff',
  },
  content: {
    backgroundColor: '#ffff',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

const HomeScreen = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);

  return (
    <>
      <SafeAreaView style={styles.topItems}>
        <Button
          onPress={() => {
            dispatch(clearProduct());
          }}
          title="商品履歴の削除"
        />
      </SafeAreaView>
      <SafeAreaView style={styles.content}>
        <Text>商品リスト</Text>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ListItem
              bottomDivider
              onPress={() => {
                navigation.navigate('Shop', { product: item });
              }}
            >
              <EleIcon name="border-color" />
              <ListItem.Content>
                <ListItem.Title>{item}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
      <ActionButton
        buttonColor="rgba(50,150,255,1)"
        renderIcon={() => {
          return (
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          );
        }}
        onPress={() => {
          dispatch(searchProduct('4901330512378'));
        }}
      />
    </>
  );
};

export default HomeScreen;
