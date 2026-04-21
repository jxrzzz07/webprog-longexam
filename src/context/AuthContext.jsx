import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const getStoredUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser());

  const signUp = ({ name, email, password }) => {
    const newUser = { name, email, password };
    localStorage.setItem('registeredUser', JSON.stringify(newUser));
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const signIn = ({ email, password }) => {
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      localStorage.setItem('user', JSON.stringify(registeredUser));
      setUser(registeredUser);
      return true;
    }

    return false;
  };

  const signOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);