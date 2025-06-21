import React from 'react'
import {sendPasswordResetEmail} from "firebase/auth";
import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
 

const ForgetPassword = () => {
  
    // const firebase = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  

 
    const handleSubmit = e => {
      e.preventDefault();
      sendPasswordResetEmail(getAuth, email)
      .then(() =>{
        setError(null);
        setSuccess(`Consultez votre adresse email ${email} pour changer le mot de passe`)
        setEmail('');
        setTimeout (()=>{
            navigate('/login');
        }, 5000)

      })
      .catch(error => {
        setError(error);
        setEmail('');
      })
    }

    const disabled = email === "";
  
    return (
      <div className='signUpLoginBox'>
        <div className='slContainer'>
          <div className='formBoxLeftForget'>
  
          </div>
          <div className='formBoxRight'>
            {success && <span style={{
                border: "1px solid green", 
                background: "green", 
                color: "#ffffff"}}>{success}</span>}

                {error && <span>{error.message}</span>}

             <h2>Récupération du mot de passe</h2>
            <form onSubmit={handleSubmit}>
              <div className='inputBox'>
                <input onChange={e => setEmail(e.target.value)} value={email} type='email' id='email' required />
                <label htmlFor='email'>Email</label>
              </div>

              <div className='linkContainer'>
                <Link className='simpleLink' to="/login">Déja inscrit ? Connectez-vous</Link>
              </div>
              <button disabled={disabled}>Récuperer le mot de passe </button>
            </form>
          </div>
        </div>
      </div>
    )


}

export default ForgetPassword