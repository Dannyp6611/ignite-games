import { createContext, useState } from 'react';

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLogged: false,
    name: '',
  });

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export default UserContextProvider;
