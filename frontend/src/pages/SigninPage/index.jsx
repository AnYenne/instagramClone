// 1. Import thư viện từ bên thứ ba.
// 2. Import các module liên quan đến React.
import { useState } from 'react'

// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
import LoginForm from '../../components/UI/LoginForm'
import NavigationGuest from '../../components/NavigationGuest'
// 6. Import các style.
import styles from './SigninPage.module.scss'
import SignInform from '../../components/UI/SignInform'

const SigninPage = () => {
  var mobile = true
  return (
    < div className={styles.container}>
      {mobile &&( <div >
        <div className={styles.loginform}>
          <SignInform/>
        </div>
        {/* <div className={styles.leftbar}>
          <NavigationGuest />
        </div> */}
      </div>)}
    </div >
   
  )
}

export default SigninPage