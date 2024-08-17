import styles from './CenterContent.module.scss'
import Stories from '../Stories'

import React from 'react'

const CenterContent = () => {
  
    
  return (   
       <div className={styles.container}>
              <Stories />
              <div className={styles.newFeedFrame}>newfeed</div>
      </div>
    
  )
}

export default CenterContent;