import { useState } from 'react'
import './App.css'
import app from './Firebase/Firebase.config'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";



const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const Githubprovider = new GithubAuthProvider()
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
  const handleSignOut = () => {
    signOut(auth)
      .then(result => {
        setuser(null)
      })
      .then(error => {
        console.log(error)
      })
  }
  const handleGithubSignIn = () => {
    signInWithPopup(auth, Githubprovider)

      .then(result => {
        const loggedGithubUser = result.user;
        console.log(loggedGithubUser)
        setuser(loggedGithubUser)
        console.log('mamama ami aisi')
      })
      .then(error => {
        console.log('giterror', error)
      })
  }

  return (
    <>

      <h1>Firebase React</h1>
      <div>
        {user ? <button onClick={handleSignOut}> sign Out</button> :
          <>
            <button onClick={handleGoogleSignIn}>Google signIn</button>
            <button onClick={handleGithubSignIn}>Github signIn</button>
          </>}
        {
          user ? <div>
            <p>user:{user.displayName}</p>
            <img src={user.photoURL} alt="" />
          </div> : ""
        }
      </div>

    </>
  )
}

export default App
