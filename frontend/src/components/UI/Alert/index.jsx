import styles from './Alert.module.scss'
import {useEffect, useState} from 'react'

const Alert = ({title = 'Discard post', accept = 'discard' , cancel = 'cancel', message = "If you leave, your edits won't be saved.", res }) => {
  

  return (
   <div className={styles.background}>
      <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.message}>{message}</div>
            </div>
            <div onClick={()=> res('yes')} className={styles.acceptBtn}>{accept}</div>
            <div onClick={()=> res('no')} className={styles.cancelBtn}>{cancel}</div>
      </div>
   </div>
  )
}

export default Alert