import React from 'react'

function Login() {
  return (
    <div>
      <form action="#" method="post">
      <Input name="email" label="E-mail:" typeOf="email"/>
      <Input name="password" label="Password:" typeOf="password"/>
      <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login