import React from 'react';
import Android from './Android';
import Desktop from './Desktop';
import Ios from './Ios';

function App(): JSX.Element {
  const isAndroid = navigator.userAgent.toLowerCase().indexOf('android') > -1;
  const isIOS = navigator.userAgent.toLowerCase().indexOf('iphone') > -1;
  const isNotAnyMobile = !isAndroid && !isIOS;
  return (
    <>
      {isAndroid && <Android />}
      {isIOS && <Ios />}
      {isNotAnyMobile && <Desktop />}
    </>
  );
}

export default App;
