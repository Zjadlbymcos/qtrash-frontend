import { CredentialResponse } from "@react-oauth/google";
import React, { createContext, ReactNode, useReducer } from "react";

type AuthStore = {
  credentials: CredentialResponse;
};

type Store = {
  auth: [AuthStore, React.Dispatch<React.SetStateAction<AuthStore>>];
};

type StoreProviderProps = {
  children: ReactNode;
};

export const StoreContext = createContext<Store>(null!);

export function StoreProvider({ children }: StoreProviderProps) {
  const auth = React.useState<AuthStore>(null!);

  const store = {
    auth,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
