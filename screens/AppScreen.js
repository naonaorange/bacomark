import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const AppScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() => {
          alert('hello');
        }}
        title="hello"
      />
    </SafeAreaView>
  );
};

export default AppScreen;
