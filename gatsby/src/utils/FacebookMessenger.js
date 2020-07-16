import React, { useEffect } from 'react'

export default function FacebookMessenger() {
  useEffect(() => {
    window.fbAsyncInit = function () {
      /*global FB*/
      FB.init({ xfbml: true, version: 'v7.0' })
    }
    ;(function (d, s, id) {
      let js
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.defer = true
      js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js'
      d.body.appendChild(js)
    })(document, 'script', 'facebook-jssdk')
  }, [])
  return (
    <>
      <div id='fb-root' />
      <div
        className='fb-customerchat'
        attribution='setup_tool'
        page_id='126610007388768'
        theme_color='#0043CE'
        logged_in_greeting='Hola ¿cómo podemos ayudarte?'
        logged_out_greeting='Hola ¿cómo podemos ayudarte?'
      />
    </>
  )
}
