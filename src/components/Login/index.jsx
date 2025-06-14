import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const handlePassword = e => {
  setPassword(e.target.value);
}


  return (
    <div className='signUpLoginBox'>
        <div className='slContainer'>
              <div className='formBoxLeftLogin'>

        </div>
        <div className='formBoxRight'>
          <form >
            <h2>Connexion</h2>

            <div className='inputBox'>
              <input onChange={e =>  setEmail(e.target.value)} value={email} type='email' id='email' required />
              <label htmlFor='email'>Email</label>
            </div>
            <div className='inputBox'>
              <input onChange={handlePassword} value={password} type='password' id='password' required />
              <label htmlFor='password'>Password</label>
            </div>

            <div className='linkContainer'>
              <Link className='simpleLink' to="/signup">Nouveau sur marvel Quiz ? Inscrivez-vous maintenant</Link>
            </div>
          </form>
        </div>
        </div>
    </div>
  )
}

export default Login