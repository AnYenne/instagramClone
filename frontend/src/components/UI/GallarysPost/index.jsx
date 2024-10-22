// 1. Import thư viện từ bên thứ ba.
// 2. Import các module liên quan đến React.
// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
// 6. Import các style.
import styles from './GallarysPost.module.scss'

const GallaryPost = (data = []) => {
  return (
    <div className={styles.container}>
       {!data  && 
       <div className={styles.empty}>
            <p>empty</p>
       </div>  }
       {/* {data && data.forEach(post => {
        (<img src={post.image}> 
            
            </img>)
       })} */}
    </div>
  )
}

export default GallaryPost