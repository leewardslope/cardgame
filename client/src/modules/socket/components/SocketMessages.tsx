import React, { useState, useContext } from 'react';
import { userAuthContext } from '../../../context/authContext';
import { socketContext } from '../../../context/socketContext';

const SocketMessages = () => {
  const { socket } = useContext(socketContext);
  const { user } = useContext(userAuthContext);
  const [message, setMessage] = useState<string>('');
  const [displayMessage, setDisplayMessage] = useState<string[]>([]);

  const handleButtonClick = () => {
    if (socket.connected) {
      socket.emit('message', `${user?.displayName}: ${message}`);
    }
    setMessage('');
  };

  socket.off('received').on('received', (message: string) => {
    console.log(message);
    setDisplayMessage([...displayMessage, message]);
  });

  return (
    <React.Fragment>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleButtonClick}>Custom Emit test</button>
      {displayMessage.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </React.Fragment>
  );
};

export default SocketMessages;
