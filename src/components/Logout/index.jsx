import  {useState, useEffect, useContext} from 'react'
import { FirebaseContext } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const firebase = useContext(FirebaseContext)
    const [checked, setChecked] = useState(false);   
    const navigate = useNavigate();
    

    useEffect(()=>{
        if(checked){
            console.log("Déconnexion");
            firebase.signoutUser();
            let end = setTimeout(()=>{
                navigate('/')
            },1000);
            
            return () => clearTimeout(end);
        }
    },[checked, firebase])

    const handleChange = event => {
        setChecked(event.target.checked);
    }

    return (
        <div className='logoutContainer'>
            <label className='switch'>
                <input onChange={handleChange} type='checkbox' checked={checked}>

                </input>
                <span className='slider round'></span>
            </label>
            
        </div>
    )
}

export default Logout