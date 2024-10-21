import styles from './HomePage.module.scss'
import LeftBar from '../../components/LeftBar'
import RightBar from '../../components/RightBar'
import React from 'react'
import CenterContent from '../../components/CenterContent'
import clsx from 'clsx'

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