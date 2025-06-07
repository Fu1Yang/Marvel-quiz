import useState from 'react'

const Signup = () => {
  // const data = {
  //   pseudo: '',
  //   email: '',
  //   password: '',
  //   confimePassword: '',
  // }
  // const [loginData, setLoginData] = useState(data);
  // console.log(loginData)

  return (
    <div className='signUpLoginBox'>
        <div className='slContainer'>
           <div className='formBoxLeftSignup'>

           </div>
           <div className='formBoxRight'>
              <form>
                <h2>Inscription</h2>
                <div className='inputBox'>
                  <input type='text' id='pseudo' required/>
                  <label htmlFor='pseudo'>Pseudo</label>
                </div>
                 <div className='inputBox'>
                  <input type='email' id='email' required/>
                  <label htmlFor='email'>Email</label>
                </div>
                 <div className='inputBox'>
                  <input type='password' id='password' required/>
                  <label htmlFor='password'>Password</label>
                </div>
                <div className='inputBox'>
                  <input type='password' id='confimePassword' required/>
                  <label htmlFor='password'>Comfirme Password</label>
                </div>
                <div>
                  <button type="submit">Inscription</button>
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