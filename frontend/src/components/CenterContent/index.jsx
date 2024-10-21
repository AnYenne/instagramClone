// 1. Import thư viện từ bên thứ ba.
// 2. Import các module liên quan đến React.
// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
import Stories from '../Stories'
import Post from '../UI/Post'
// 6. Import các style.
import styles from './CenterContent.module.scss'


const CenterContent = () => {
  
    
  return (   
       <div className={styles.container}>
              <div className={styles.stories} ><Stories /> </div>
              <div className={styles.newFeedFrame}><Post /></div>
      </div>
    
  )
}

export default CenterContent;