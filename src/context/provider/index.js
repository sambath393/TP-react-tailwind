import React from 'react';
import { UserProvider, useUser } from './user';

export { useUser };

export default function Provider({ children }) {
  return <UserProvider>{children}</UserProvider>;
}
