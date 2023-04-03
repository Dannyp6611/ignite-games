import { useContext } from 'react';
import { userContext } from './UserContext';

export const useUserContext = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error('cannot access user context outside of user provider');
  }
  return context;
};
