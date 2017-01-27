import React from 'react'
import withProfile from '../with-profile'
import withLayout from '../with-layout'
import LoggedInNotification from '../components/LoggedInNotification'

const LoginWith = ({service, redirect}) => (
  <div className='login'>
    <a className='button is-medium' href={`https://login.now.sh/${service.toLowerCase()}?success=${redirect}&failure=${redirect}`} >
      <span className='icon is-medium'><i className={`fa fa-${service.toLowerCase()}`} /></span>
      <span>Login with <strong>{service}</strong></span>
    </a>
  </div>
)

const Login = ({profile, origin}) => {
  const redirect = encodeURIComponent(origin + '/')
  return (
    <div className='section'>
      { !profile && ['Twitter', 'GitHub', 'Reddit'].map(service => (
          <LoginWith service={service} redirect={redirect} /> 
        ))
      }
      { profile && <LoggedInNotification profile={profile} redirect={redirect} /> }
      <p className='has-text-centered'>
        The login profile will <strong>not</strong> be stored in any database. 
        All non-sensitive profile information will be set as cookie and the 
        service related tokens/keys are stored as <strong>encrypted</strong> 
        <a href='https://jwt.io'> JWT</a>.
      </p>
      <p className='has-text-centered'>
        This project is open source and you are welcomed to double-check that nothing
        evil happens to your login data at any point.
      </p>
      <style jsx>{`
        .login {
          margin: 3em 0;
          display: flex;
          justify-content: center;
        }
        p:first-of-type {
          margin-top: 7em;
        }
        p {
          margin: 2em auto;
        }
      `}</style>
    </div>
  )
}

export default withProfile({Component: withLayout(Login)})