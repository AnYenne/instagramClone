// 1. Import thư viện từ bên thứ ba.
import clsx from 'clsx'
// 2. Import các module liên quan đến React.
import React from 'react'
// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
import LeftBar from '../../components/LeftBar'
import RightBar from '../../components/RightBar'
import CenterContent from '../../components/CenterContent'

// 6. Import các style.
import styles from './HomePage.module.scss'


const HomePage = () => {
 
  return (
    <div className={styles.container}>
        
        <div className={clsx(styles.leftBar, '')}><LeftBar /></div>

        <div className={styles.rightPC}>
          <div className={clsx(styles.center, '')}><CenterContent /> </div>
          <div className={clsx(styles.rightBar, '')}><RightBar/></div>
        </div>
       
    </div>
  )
}

export default HomePage