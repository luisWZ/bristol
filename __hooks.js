// https://www.freecodecamp.org/news/the-react-cheatsheet-for-2020/
// Ref example
import React from 'react'

function App() {
  const [email, setEmail] = React.useState('react_hooks')

  const emailInput = useRef(null)

  function handleClearEmail() {
    emailInput.current.value = ''
    emailInput.current.focus()
  }

  return (
    <form>
      <input
        type='email'
        onChange={event => setEmail(event.target.value)}
        ref={emailInput}
      />
      <button type="submit">Submit</button>
      <button onClick={handleClearEmail}>Clear</button>
    </form>
  )
}
