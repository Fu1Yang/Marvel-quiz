import {useState, useContext, useEffect} from 'react'
import Logout from '../Logout'
import Quiz from '../Quiz'
import { FirebaseContext } from '../Firebase'
import { useNavigate } from 'react-router-dom';
import { getDoc } from 'firebase/firestore';



const Welcome = () => {
  const firebase = useContext(FirebaseContext);
  const [userSession, setUserSession] = useState(null);
  const [userData ,setUserData] = useState({})
  const navigate = useNavigate();
  
  useEffect(()=>{
    const listener = firebase.auth.onAuthStateChanged(user => {
    if (user) {
      setUserSession(user);
    } else {
      setUserSession(null);
      navigate('/');
    }
  });
    return () => listener();
  },[firebase, navigate])

  useEffect(() => {
    if (userSession) {
      const userRef = firebase.user(userSession.uid);
      getDoc(userRef)
        .then(snapshot => {
          if (snapshot.exists) {
            setUserData(snapshot.data());
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [userSession, firebase]);

  return  userSession === null ? (
   <>
      <div className='loader'></div>
      <p className='loaderText'>Loading ...</p>
   </>
  ) : (

    <div className='quiz-bg'>
        <div className='container'>
           <Logout/>
           <Quiz userData={userData}/>
        </div>
    </div>
  )




}

export default Welcome