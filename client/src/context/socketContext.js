import { createContext } from 'react';
import io from 'socket.io-client';

export const socketContext = createContext();

const SocketContextProvider = ({ children }) => {
  const socket = io('/');
  return <socketContext.Provider value={{ socket }}>{children}</socketContext.Provider>;
};

export default SocketContextProvider;
