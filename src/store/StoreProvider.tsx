import { CredentialResponse } from '@react-oauth/google';
import React, { createContext, ReactNode, useReducer } from 'react';

type Trash = {
  code: string;
  title: string;
  description: string;
  imageUrl: string;
};

type TrashStore = {
  trash: Trash | null;
};

type AuthStore = {
  credentials: CredentialResponse;
};

type Store = {
  auth: [AuthStore, React.Dispatch<React.SetStateAction<AuthStore>>];
  trash: [TrashStore, React.Dispatch<React.SetStateAction<TrashStore>>];
};

type StoreProviderProps = {
  children: ReactNode;
};

export const StoreContext = createContext<Store>(null!);

export function StoreProvider({ children }: StoreProviderProps) {
  const auth = React.useState<AuthStore>(null!);
  const trash = React.useState<TrashStore>(null!);

  const store = {
    auth,
    trash,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
