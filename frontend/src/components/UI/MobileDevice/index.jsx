import styles from './MobileDevice.module.scss'
import React from 'react'

const MobileDevice = () => {
  const screenshot =  ['/screenshot1.png','/screenshot2.png','/screenshot3.png','/screenshot4.png']
  // make it auto change image for a amount of time
  
  return (
    <div className={styles.container}>
        <div className={styles.deviceFrame}>
          {screenshot.map(src => {
            return <img className={styles.screenshot} src={src}/>
          })}
            
        </div>
    </div>
  )
}

export default MobileDevice