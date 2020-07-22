/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

import React from 'react';
import { useFacebook } from '../utils/useFacebook';

// const useStyles = makeStyles(theme => ({
//   '@global': {
//     '.fb_dialog,.fb_reset iframe': {
//       zIndex: `${theme.zIndex.modal - 10} !important`,
//     },
//   },
// }));

// https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin
const FacebookChat = React.memo(function FacebookChat() {
  const timeoutRef = React.useRef();

  // Initialize Facebook widget(s) in 2 seconds after
  // the component is mounted.
  useFacebook({ xfbml: false }, FB => {
    if (timeoutRef.current !== null) {
      timeoutRef.current = setTimeout(() => {
        const el = document.createElement('div');
        el.className = 'fb-customerchat';
        el.setAttribute('attribution', 'setup_tool');
        el.setAttribute('page_id', '126610007388768');
        el.setAttribute('ptheme_color', '#0043CE');
        // el.setAttribute('plogged_in_greeting', '...');
        // el.setAttribute('plogged_out_greeting', '...');
        // el.setAttribute('pgreeting_dialog_display', '...');
        // el.setAttribute('pgreeting_dialog_delay', '...');
        el.setAttribute('pminimized', 'true');
        document.body.appendChild(el);
        FB.XFBML.parse();
      }, 2000);
    }
  });

  return null;
});

export default FacebookChat;
