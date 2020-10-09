import { createSelector } from 'reselect';

const readerSelector = (state) => state.reader;

export const getBarcode = createSelector(
  [readerSelector],
  (state) => state.barcode
);
