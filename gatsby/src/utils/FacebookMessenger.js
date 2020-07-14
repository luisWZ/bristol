import React from 'react'
// just inserts the element
// the script is inserted by helmet in Layout
// this way react doesnt wait for the chat to load
export default function FacebookMessenger() {
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
