import styles from './HomePage.module.scss'
import LeftBar from '../../components/LeftBar'
import RightBar from '../../components/RightBar'
import React from 'react'
import CenterContent from '../../components/CenterContent'

const HomePage = () => {
  return (
    <div className={styles.container}>
        <div><LeftBar /></div>
        <div className={styles.center}><CenterContent /> </div>
        <div><RightBar/></div>
    </div>
  )
}

export default HomePage