import { useContext } from 'react';
import { storeContext } from './StoreContext';

export const useStoreContext = () => {
  const context = useContext(storeContext);
  if (!context) {
    throw new Error('cannot access store context outside of store provider');
  }
  return context;
};
