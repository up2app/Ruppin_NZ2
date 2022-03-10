import { useContext, useState } from 'react';
import { UserContext } from '../Context/userContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate()

  const { FindUser } = useContext(UserContext);
  const [user, SetUser] = useState({ email: '', password: '' })

  const GoToProfile = (event) => {
    event.preventDefault();
    let u = FindUser(user.email, user.password);
    if (u)
      navigate('/profile')
    else
      alert('wrong details')
  }


  return (
    <>
      <div>Login Page</div>
      <br /><br />
      <form>
        <label htmlFor='email'>Email: </label>
        <input id="email" type="email"
          value={user.email}
          onChange={(event) => SetUser(details => ({ ...details, email: event.target.value }))}
        />
        <br />
        <label htmlFor='pass'>Password: </label>
        <input id="pass" type="password"
          value={user.password}
          onChange={(event) => SetUser(details => ({ ...details, password: event.target.value }))}
        />
        <br />
        <button onClick={GoToProfile}>
          Login
        </button>
      </form>
    </>
  )
}
