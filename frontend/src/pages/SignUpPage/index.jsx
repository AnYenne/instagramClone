// 1. Import thư viện từ bên thứ ba.
// 2. Import các module liên quan đến React.
import { useState } from 'react'

// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
import LoginForm from '../../components/UI/LoginForm'
import NavigationGuest from '../../components/NavigationGuest'
import SignUpform from '../../components/UI/SignUpform'
// 6. Import các style.
import styles from './SignUpPage.module.scss'
import Footer from '../../components/Footer'

const SignUpPage = () => {
  return (
    < div className={styles.container}>
        <div className={styles.signupform}>
          <SignUpform/>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
       
    </div >
   
  )
}

export default SignUpPage