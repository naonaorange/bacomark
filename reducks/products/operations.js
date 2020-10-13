import axios from 'axios';
import * as Action from './actions';
import Constants from 'expo-constants';
import { Alert } from 'react-native';

const ROOT_URL =
  'https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch';

export const searchProduct = (barcode) => {
  return async (dispatch) => {
    const url = `${ROOT_URL}?appid=${Constants.manifest.extra.apiKey}&jan_code=${barcode}&results=1`;
    let product = '';
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        const data = response.data['hits'][0]['name'];
        if (data !== 'undefined' && data !== 'null' && data !== '') {
          product = data;
        }
      }
    } catch {}

    if (product === '') {
      Alert.alert(
        'バーコードを読み込むことができませんでした',
        'もう一度お試しください',
        [{ text: 'OK' }],
        {
          cancelable: false,
        }
      );
    } else {
      dispatch(Action.addProduct(product));
    }
  };
};

export const clearProduct = () => {
  return async (dispatch) => {
    dispatch(Action.clearProduct());
  };
};
