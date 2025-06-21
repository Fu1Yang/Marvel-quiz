import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const Login = () => {

 const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState('')
  const navigate = useNavigate();

  useEffect(()=>{
    if (password.length > 5 && email !== ""){
        setBtn(true)
    }else if(btn) {
         setBtn(false)
    }
  },[password, email, btn])

  const handlePassword = e => {
    setPassword(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    firebase.loginUser(email, password)
    .then(user =>{
      console.log(user)
      setEmail('');
      setPassword('');
      navigate('/welcome', {replace: true});
    })
    .catch(error => {
      setError(error);
      setEmail('');
      setPassword('');
    })
  }

  return (
    <div className='signUpLoginBox'>
      <div className='slContainer'>
        <div className='formBoxLeftLogin'>

        </div>
        <div className='formBoxRight'>
          <form onSubmit={handleSubmit}>
            {error !== '' && <span>{error.message}</span>}
            <h2>Connexion</h2>

            <div className='inputBox'>
              <input onChange={e => setEmail(e.target.value)} value={email} type='email' id='email' required />
              <label htmlFor='email'>Email</label>
            </div>
            <div className='inputBox'>
              <input onChange={handlePassword} value={password} type='password' id='password' required />
              <label htmlFor='password'>Password</label>
            </div>
            {
              <button disabled={btn ? false : true}>Connexion</button>
            }
          </form>
          <div className='linkContainer'> 
              <Link className='simpleLink' to="/signup">Nouveau sur marvel Quiz ? Inscrivez-vous maintenant</Link>
              <br/>
              <Link className='simpleLink' to="/signup">Mot de passe oublié? Récupérez-le ici.</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login