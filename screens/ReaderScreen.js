import React, { useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

const ReaderScreen = () => {
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </SafeAreaView>
  );
};

export default ReaderScreen;
