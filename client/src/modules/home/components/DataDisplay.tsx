import React, { useContext } from 'react';
import { userAuthContext } from '../../../context/authContext';

const DataDisplay = () => {
  const { user } = useContext(userAuthContext);
  return (
    <React.Fragment>
      <div>
        <img
          src={user?.photoURL || `https://picsum.photos/150`}
          alt={`${user?.displayName} Profile Pic`}
        />
        <p>{user?.displayName}</p>
        <p>{user?.email}</p>
      </div>
    </React.Fragment>
  );
};

export default DataDisplay;
