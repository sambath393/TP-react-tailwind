import React, { createContext, useContext } from 'react';

const UserController = createContext();

export function UserProvider({ children }) {
  return <UserController.Provider>{children}</UserController.Provider>;
}

export const useUser = () => useContext(UserController);
