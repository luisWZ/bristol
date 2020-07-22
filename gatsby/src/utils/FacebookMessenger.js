import React, { useEffect } from 'react'

let promise

const FacebookMessenger = React.memo(function FacebookMessenger() {
  const timeoutRef = React.useRef()

  const callBack = FB => {
    if (timeoutRef.current !== null) {
      timeoutRef.current = setTimeout(() => {
        const el = document.createElement('div')
        el.className = 'fb-customerchat'
        el.setAttribute('attribution', 'setup_tool')
        el.setAttribute('page_id', '126610007388768')
        el.setAttribute('theme_color', '#0043CE')
        el.setAttribute('logged_in_greeting', 'Hola ¿cómo podemos ayudarte?');
        el.setAttribute('logged_out_greeting', 'Hola ¿cómo podemos ayudarte?');
        el.setAttribute('minimized', 'true');
        document.body.appendChild(el)

        FB.XFBML.parse()

      }, 800)
    }
  }

  useEffect(() => {
    if (promise) {
      promise.then(callBack);

    } else {

      promise = new Promise(resolve => {
            window.fbAsyncInit = () => {
              window.FB.init({
                appId: '252840179154396',
                xfbml: false,
                status: true,
                cookie: true,
                version: 'v7.0',
              })
              resolve(window.FB)
            }

            const js = document.createElement('script')
            js.id = 'facebook-jssdk'
            // js.async = true
            js.src = `https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js`
            document.body.appendChild(js)
    })
    promise.then(callBack);
    }
  }, [])
  return null
})

export default FacebookMessenger