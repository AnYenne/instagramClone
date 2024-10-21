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