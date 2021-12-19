import shopActionType from './shop-types.js';

export const updateCollections = (collectionsMap) => ({
  type: shopActionType.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
