import { useState, useContext } from 'react';
import { FirebaseContext } from '../Firebase';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const firebase = useContext(FirebaseContext);
  console.log(firebase);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const data = {
    pseudo: '',
    email: '',
    password: '',
    confirmePassword: '',
  }
  const [loginData, setLoginData] = useState(data);

  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value })
  }

  const { pseudo, email, password, confirmePassword } = loginData;

  const btn = pseudo === '' || email === '' || password === '' || password !== confirmePassword
    ? <button disabled>Inscription</button> : <button>Inscription</button>

  const handleSubmit = e => {

    const { email, password} = loginData;
    e.preventDefault();
    firebase.signupUser(email, password)
    .then(user => {
        setLoginData({...data})
        navigate('/welcome')
    })
    .catch(error =>{
        setError(error);
         setLoginData({...data})
    })
  }


  //gestion des erreurs
  const errorMsg = error !== '' && <span>{error.message}</span>;

  return (
    <div className='signUpLoginBox'>
      <div className='slContainer'>
        <div className='formBoxLeftSignup'>

        </div>
        <div className='formBoxRight'>
          <form onSubmit={handleSubmit}>
          {errorMsg}
            <h2>Inscription</h2>
            <div className='inputBox'>
              <input onChange={handleChange} value={pseudo} type='text' id='pseudo' required />
              <label htmlFor='pseudo'>Pseudo</label>
            </div>
            <div className='inputBox'>
              <input onChange={handleChange} value={email} type='email' id='email' required />
              <label htmlFor='email'>Email</label>
            </div>
            <div className='inputBox'>
              <input onChange={handleChange} value={password} type='password' id='password' required />
              <label htmlFor='password'>Password</label>
            </div>
            <div className='inputBox'>
              <input onChange={handleChange} value={confirmePassword} type='password' id='confirmePassword' required />
              <label htmlFor='password'>Comfirme Password</label>
            </div>
            <div>
              {btn}
            </div>
            <div>
              <p>déja inscrit ? Connectez-vous.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup