import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Android from './Android';
import Desktop from './Desktop';
import Ios from './Ios';
import api from '../services/api';

interface Item {
  name: string;
  image: string;
}

function App(): JSX.Element {
  const location = useLocation();
  const [item, setItem] = React.useState<Item | undefined>();
  const isAndroid = navigator.userAgent.toLowerCase().indexOf('android') > -1;
  const isIOS = navigator.userAgent.toLowerCase().indexOf('iphone') > -1;
  const isNotAnyMobile = !isAndroid && !isIOS;
  useEffect(() => {
    if (location.pathname.includes('groups')) {
      if (location.pathname.split('/').length >= 3) {
        const groupId = location.pathname.split('/')[2];
        api.get(`groups/${groupId}`).then(({ data }) => {
          setItem({ name: data.name, image: data.photoURL });
        });
      }
    }
    if (location.pathname.includes('users')) {
      if (location.pathname.split('/').length >= 3) {
        const groupId = location.pathname.split('/')[2];
        api.get(`users/${groupId}`).then(({ data }) => {
          setItem({ name: data.name, image: data.photoURL });
        });
      }
    }
  }, [location]);
  return (
    <>
      {isAndroid && <Android item={item} />}
      {isIOS && <Ios item={item} />}
      {isNotAnyMobile && <Desktop item={item} />}
    </>
  );
}

export default App;
