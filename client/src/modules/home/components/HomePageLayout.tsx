import React, { useContext } from 'react';

import { userAuthContext } from '../../../context/authContext';
import DataDisplay from './DataDisplay';
import NavButtons from './NavButtons';

const HomePageLayout = () => {
  const { userAuthenticated } = useContext(userAuthContext);

  return (
    <React.Fragment>
      <NavButtons />
      {userAuthenticated && <DataDisplay />}
    </React.Fragment>
  );
};

export default HomePageLayout;
