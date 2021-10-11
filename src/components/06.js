// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  function handleSubmit(event) {
    event.preventDefault()

    // const username = event.target[0].value
    // console.log(event.target[0].value)
    console.log('logging email:', event.target.elements.usernameInput.value)
    const username = event.target.elements.usernameInput.value
    onSubmitUsername(username)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">email:</label>
        <input id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
