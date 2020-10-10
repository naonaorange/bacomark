import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { searchProduct } from '../reducks/products/operations';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

const ReaderScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    dispatch(searchProduct(data));
  };

  if (hasPermission === null) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </SafeAreaView>
    );
  }
  if (hasPermission === false) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>No access to camera</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </SafeAreaView>
  );
};

export default ReaderScreen;
