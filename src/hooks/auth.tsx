import React, { createContext, useState, useContext, useEffect } from 'react';
import * as AuthSessions from 'expo-auth-session';
import { api } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CLIENT_ID = '09520dda60518fce4fd4';
const SCOPE = 'read:user';
const USER_STORAGE = '@heat:user';
const TOKEN_STORAGE = '@heat:user';

//2:13

type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
};

type AuthContextData = {
  user: User | null;
  isSigningIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthResponse = {
  token: string;
  user: User;
};

type AuthorizationResponse = {
  params: {
    code?: string;
    error?: string;
  };
  type?: string;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  async function signIn() {
    try {
      setIsSigningIn(true);
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&${SCOPE}`;
      const authSessionResponse = (await AuthSessions.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (
        authSessionResponse.type === 'sucess' &&
        authSessionResponse.params.error !== 'acess_denied'
      ) {
        const authResponse = await api.post('/authenticate', {
          code: authSessionResponse.params.code,
        });
        console.log(authSessionResponse.params, 'AQUIPARAMS');
        const { user, token } = authResponse.data as AuthResponse;
        console.log(authResponse.data, 'AQUIDATA');

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
        await AsyncStorage.setItem(TOKEN_STORAGE, token);
        setUser(user);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsSigningIn(false);
    }
  }

  async function signOut() {
    setUser(null);
    await AsyncStorage.removeItem(USER_STORAGE);
    await AsyncStorage.removeItem(TOKEN_STORAGE);
  }

  useEffect(() => {
    async function LoadUserStoreData() {
      const userStorage = await AsyncStorage.getItem(USER_STORAGE);
      const tokenStore = await AsyncStorage.getItem(TOKEN_STORAGE);

      if (userStorage && tokenStore) {
        api.defaults.headers.common['Authorization'] = `Bearer ${tokenStore}`;
        setUser(JSON.parse(userStorage));
      }
      setIsSigningIn(false);
    }
    LoadUserStoreData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
        isSigningIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
