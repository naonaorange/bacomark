import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { getBarcode } from '../reducks/reader/selector';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const AppScreen = (props) => {
  const { navigation } = props;
  //const selector = useSelector((state) => state);
  //const barcode = getBarcode(selector);

  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate('Reader');
        }}
        title="Read the barcode"
      />
    </SafeAreaView>
  );
};

export default AppScreen;
