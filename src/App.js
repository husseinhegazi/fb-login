import React, { useCallback, useState } from 'react'
import './App.css'
import {
  LoginSocialGoogle,
  LoginSocialAmazon,
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialPinterest,
  LoginSocialTwitter,
  LoginSocialApple,
  LoginSocialTiktok,
} from 'reactjs-social-login'
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton,
  AppleLoginButton,
} from 'react-social-login-buttons'

function App() {
  const [provider, setProvider] = useState('')
  const [profile, setProfile] = useState(null)

  const onLoginStart = useCallback(() => {
    alert('login start')
  }, [])

  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    alert('logout success')
  }, [])
  return (
    <>
      <div className={`App ${provider && profile ? 'hide' : ''}`}>
        <h1 className="title">ReactJS Social Login</h1>
        <LoginSocialFacebook
          isOnlyGetToken
          appId={process.env.REACT_APP_FB_APP_ID || '2432691326883003'}
          onLoginStart={onLoginStart}
          onResolve={({ provider, data }) => {
            setProvider(provider)
            setProfile(data)
            console.log("data=>",data)
            console.log("provider=>",provider)
          }}
          onReject={(err) => {
            console.log("error=>",err)
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      </div>
    </>
  )
}

export default App
