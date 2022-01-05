import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { signInWithGoogle, userAuthContext, signOutUser } from '../../../context/authContext';

const NavButtons = () => {
  const history = useHistory();

  const { userAuthenticated } = useContext(userAuthContext);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <React.Fragment>
      <Button onClick={() => history.push('/')} variant='outlined' style={{ margin: 2 }}>
        Home
      </Button>
      {!userAuthenticated && (
        <Button onClick={() => history.push('/signup')} variant='outlined' style={{ margin: 2 }}>
          Sign Up
        </Button>
      )}
      {!userAuthenticated && (
        <Button onClick={() => history.push('/signin')} variant='outlined' style={{ margin: 2 }}>
          Sign In
        </Button>
      )}

      {userAuthenticated ? (
        <Button onClick={handleSignOut} variant='contained' style={{ margin: 2 }}>
          Sign Out
        </Button>
      ) : (
        <Button onClick={handleGoogleSignIn} variant='contained' style={{ margin: 2 }}>
          Login With Google
        </Button>
      )}
    </React.Fragment>
  );
};

export default NavButtons;
