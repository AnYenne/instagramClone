// 1. Import thư viện từ bên thứ ba.
// 2. Import các module liên quan đến React.
import React from 'react'
// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
// 6. Import các style.
import styles from './MobileDevice.module.scss'

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