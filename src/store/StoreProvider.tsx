import { CredentialResponse } from '@react-oauth/google';
import React, { createContext, ReactNode, useReducer } from 'react';

export type Trash = {
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
  const trash = React.useState<TrashStore>(null!); /*{
    trash: {
      code: '12345',
      title: 'template title bla bla.',
      description: 'longer text blab lab lab lbalbla blab alba blalba blabab alblab a',
      imageUrl:
        'https://dictionary.cambridge.org/pl/images/thumb/trashb_noun_002_38838.jpg?version=5.0.274',
    },
  });*/

  const store = {
    auth,
    trash,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
