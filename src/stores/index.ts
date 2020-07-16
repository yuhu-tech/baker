import React from 'react';
import GlobalStore from './Global';

const storesContext = React.createContext({
  GlobalStore,
});

const useStores = () => React.useContext(storesContext);

export { useStores, GlobalStore };
