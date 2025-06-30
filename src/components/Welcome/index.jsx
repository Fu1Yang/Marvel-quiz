import React,{useState, useContext, useEffect} from 'react'
import Logout from '../Logout'
import Quiz from '../Quiz'
import { FirebaseContext } from '../Firebase'
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
  const firebase = useContext(FirebaseContext);
  const [userSession, setUserSession] = useState(null);
  const navigate = useNavigate();
  
  useEffect(()=>{
    let listener = firebase.auth.onAuthStateChanged(user => {
      user ? setUserSession(user) :  navigate('/')
    })

    return ()=>{
      listener()
    };
  },[])

  return  userSession === null ? (
   <>
      <div className='loader'></div>
      <p className='loaderText'>Loading ...</p>
   </>
  ) : (

    <div className='quiz-bg'>
        <div className='container'>
           <Logout/>
           <Quiz/>
        </div>
    </div>
  )




}

export default Welcome