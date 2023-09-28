import { useState } from 'react'
import './App.css'
import app from './Firebase/Firebase.config'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";



const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
function App() {
  const [user, setuser] = useState({})
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedGoogleUser = result.user;
        console.log(loggedGoogleUser)
        setuser(loggedGoogleUser)
        console.log('mamama ami aisi')
      })
      .then(error => {
        console.log('error', error.message)

      })
  }

  return (
    <>

      <h1>Firebase React</h1>
      <div>
        <button onClick={handleGoogleSignIn}>Google signIn</button>
        {
          user ? <div>
            <p>user:{user.displayName}</p>
          </div> : ""
        }
      </div>

    </>
  )
}

export default App
