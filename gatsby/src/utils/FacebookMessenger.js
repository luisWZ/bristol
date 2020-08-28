import React, { useEffect } from 'react'
import CssVariables from 'styles/CssVariables'

let promise
const greeting = `Hola ¿cómo podemos ayudarte?`
const config = {
  appId: `252840179154396`,
  page_id: `126610007388768`,
}

const FacebookMessenger = React.memo(function FacebookMessenger() {
  const timeoutRef = React.useRef()

  const callBack = FB => {
    if (timeoutRef.current !== null) {
      timeoutRef.current = setTimeout(() => {
        const el = document.createElement('div')
        el.className = 'fb-customerchat'
        el.setAttribute('page_id', config.page_id)
        el.setAttribute('theme_color', CssVariables.bristolBlue)
        el.setAttribute('logged_in_greeting', greeting);
        el.setAttribute('logged_out_greeting', greeting);
        el.setAttribute('greeting_dialog_display', 'hide')
        document.body.appendChild(el)

        FB.XFBML.parse()

      }, 100)
    }
  }

  useEffect(() => {
    if (promise) {
      promise.then(callBack);

    } else {

      promise = new Promise(resolve => {
        window.fbAsyncInit = () => {
          window.FB.init({
            appId: config.appId,
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