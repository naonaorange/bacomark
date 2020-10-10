import axios from 'axios';
import * as Action from './actions';
import Constants from 'expo-constants';

const ROOT_URL =
  'https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch';

export const searchProduct = (barcode) => {
  return async (dispatch) => {
    const url = `${ROOT_URL}?appid=${Constants.manifest.extra.apiKey}&jan_code=${barcode}&results=1`;
    let product = '';
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        product = response.data['hits'][0]['name'];
      } else {
        alert('正常に読み込めませんでした\nもう一度スキャンしてください');
      }
    } catch {
      alert('正常に読み込めませんでした\nもう一度スキャンしてください');
    }

    if (product !== '') {
      dispatch(Action.addProduct(product));
    }
  };
};
