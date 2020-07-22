/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

import React from 'react';

let promise;

export function useFacebook(options, cb) {
  if (typeof options === 'function') {
    cb = options;
  }

  React.useEffect(() => {
    if (promise) {
      promise.then(cb);
    } else {
      promise = new Promise(resolve => {
        // https://developers.facebook.com/docs/javascript/reference/FB.init
        window.fbAsyncInit = () => {
          window.FB.init({
            appId: '252840179154396',
            autoLogAppEvents: true,
            status: true,
            cookie: true,
            xfbml: false,
            version: 'v5.0',
            ...options,
          });
          resolve(window.FB);
        };

        const script = document.createElement('script');
        const isDebug = window.localStorage.getItem('fb:debug') === 'true';
        script.src = `https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js${isDebug ? '/debug' : ''}.js`; // prettier-ignore
        document.head.appendChild(script);
      });
      promise.then(cb);
    }
  }, []);
}
