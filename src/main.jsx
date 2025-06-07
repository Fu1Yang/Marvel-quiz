import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import Firebase, {FirebaseContext} from './components/Firebase'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
    <App />
    </FirebaseContext.Provider>
  </StrictMode>,
)
