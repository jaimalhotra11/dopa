import React, { createContext, useContext, useState, useEffect } from 'react';
import { userApi } from '../utils/api';

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('userToken');
      if (token) {
        try {
          const { data } = await userApi.getProfile();
          setUser(data);
        } catch (error) {
          localStorage.removeItem('userToken');
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const { data } = await userApi.login(email, password);
    localStorage.setItem('userToken', data.token);
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    setUser(null);
  };

  const register = async (name: string, email: string, password: string) => {
    const { data } = await userApi.register(name, email, password);
    localStorage.setItem('userToken', data.token);
    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};