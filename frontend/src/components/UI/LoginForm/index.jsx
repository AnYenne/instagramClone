// 1. Import thư viện từ bên thứ ba.
import clsx from 'clsx'
// 2. Import các module liên quan đến React.
import React, { useState } from 'react'
// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
import Button from '../Button/index.jsx'
// 6. Import các style.
import styles from './LoginForm.module.scss'


const LoginForm = () => {
  const [userName, setUserName] = useState('guest')
  const [signed, setSigned] = useState(false)
  const data = {
    avatar: 'pngtree-facebook-logo-facebook-icon-png-image_3566127.png'
  }
  return (
    <div className={styles.containerAll}>
     {/* section guest */}
   {!signed && (
    <div className={styles.container}>
      {/* container */}
      <div className={clsx(styles.outlineForm)}>
          <div className={styles.wrap}>
              <div>
                  {/* input section */}
                  <img className={styles.img} src='images.png' />
                  <div className={styles.formSignin}>
                    <label className={styles.labelInput} htmlFor='phoneUserEmail'>Phone number, username, or email</label>
                    <input className={styles.inputSection} name='phoneUserEmail' type='text' placeholder='Phone number, username, or email'/>
                    <label className={styles.labelInput} htmlFor='password'>Password</label>
                    <span className={styles.togglePassword}>show</span>
                    <input className={styles.inputSection} type='password' placeholder='Password'/>
                  </div>

                <div className={styles.LoginBtn}>
                    <Button primary btn whiteText roundSm  >Log in</Button>
                </div>

              </div>
                {/* end input section */}
                {/* line OR */}
                <div className={styles.line}>
                  <div className={styles.lineOnly}></div>
                  <div className={styles.lineContent}>OR</div>
                  <div className={styles.lineOnly}></div>
                </div>
                <a href='/' className={styles.loginFB}>
                    <img className={styles.fbLogo} src='./pngtree-facebook-logo-facebook-icon-png-image_3566127.png' />
                  <span className={'primaryColor'}>Log in with Facebook</span>
                </a>
                <span className={clsx(styles.forgotBtn, 'primaryColor')}>
                  <a>Forgot password</a>
                </span>
          </div>
      </div>
   
      <div className={ styles.signUpform}>
              {/* sign up section  */}
        <div className={clsx(styles.outlineForm,)}>
          <span>Don't have an account?
            <a className={'.primaryLight'} href='/'>Sign up</a>
          </span>
        </div>
               {/* end signup section*/}
      </div>
   
      <div className={styles.getAppForm}>
        {/* get the app */}
        <div className={clsx(styles.getApp)}>
          <span>Get the app.</span>
          <div className={clsx(styles.downloadApp)}>
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png" alt="App Store" />
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="Google Play" />
          </div>
        </div>
        {/* end get the app */}
        
      </div>      
    </div> )}
    {/* signedIn once */}
   {signed && ( <div className={styles.container}>
      {/* container */}
      <div className={clsx(styles.outlineForm)}>
          <div className={styles.wrap}>
              <div>
                  <img className={styles.img} src='images.png' />
                  <div className={styles.center}>
                      <div className={styles.avatarFrame}>
                        <img src={signed ? data.avatar : './fb.png'} className={styles.avatar} />
                      </div>
                  </div>
                  
                <div className={styles.LoginBtn}>
                    <Button primary btn whiteText roundSm >Continue as {userName}</Button>
                </div>

                <div className={ styles.switchAccount}>
                  <span>Not {userName}?
                    <a className={'.primaryLight'} href='/'>Switch accounts</a>
                  </span>
                </div>
              
              </div>
          </div>
      </div>
   
      
    </div>
   )}
    </div> 
    
  )
}



export default LoginForm