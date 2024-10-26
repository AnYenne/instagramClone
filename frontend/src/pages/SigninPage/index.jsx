// 1. Import thư viện từ bên thứ ba.
// 2. Import các module liên quan đến React.
import { useState } from 'react'

// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
import LoginForm from '../../components/UI/LoginForm'
import NavigationGuest from '../../components/NavigationGuest'
// 6. Import các style.
import styles from './SigninPage.module.scss';
import SignInform from '../../components/UI/SignInform';
import MobileDevice from '../../components/UI/MobileDevice';
import Footer from '../../components/Footer'


const SigninPage = () => {
  var mobile = true
  return (
    < div className={styles.container}>
      {/* {mobile &&( */}
        <div className={styles.flex}>
            <div className={styles.mobileSlide}>
              <MobileDevice />
            </div>
            <div className={styles.loginform}>
              <SignInform/>
            </div>
          </div>

          <div className={styles.leftbar}>
            <NavigationGuest />
          </div>
          
          <div className={styles.footer}>
            <Footer />
          </div>
     {/* )} */}
    </div >
   
  )
}

export default SigninPage