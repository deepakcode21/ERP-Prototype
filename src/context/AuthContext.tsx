import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type UserRole = 'student' | 'teacher' | 'parent' | 'admin' | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  userRole: UserRole;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);
  
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll simulate different user roles
      let mockUser: User;
      
      if (email.includes('admin')) {
        mockUser = {
          id: '1',
          name: 'Admin User',
          email,
          role: 'admin',
          avatar: 'https://i.pravatar.cc/150?u=admin'
        };
      } else if (email.includes('teacher')) {
        mockUser = {
          id: '2',
          name: 'Teacher User',
          email,
          role: 'teacher',
          avatar: 'https://i.pravatar.cc/150?u=teacher'
        };
      } else if (email.includes('parent')) {
        mockUser = {
          id: '3',
          name: 'Parent User',
          email,
          role: 'parent',
          avatar: 'https://i.pravatar.cc/150?u=parent'
        };
      } else {
        mockUser = {
          id: '4',
          name: 'Student User',
          email,
          role: 'student',
          avatar: 'https://i.pravatar.cc/150?u=student'
        };
      }
      
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };
  
  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    userRole: user?.role || null
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};