// 1. Import thư viện từ bên thứ ba.
// 2. Import các module liên quan đến React.
// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
// 6. Import các style.
import styles from './GallarysPost.module.scss'

const GallaryPost = ({data, type}) => {
  console.log(type)

  return (
    <div>
        {type == 'post' && (<div className={styles.container}>
        {Array.isArray(data) ?( <div className={styles.posts}>
        { data.map(post => {
          return (
          <div key={post._id} className={styles.post} style={{backgroundImage: `url(${post.imageURL})`}} >{post.caption}</div>)
        })}
        </div>)
        :(<p className={styles.empty}>empty</p> ) }
        </div>)}


        {type == 'reel' && (<div className={styles.container}>
        {Array.isArray(data) ?( <div className={styles.reels}>
        { data.map(reel => {
          return (
           
          <div key={reel._id} className={styles.reel} style={{backgroundImage: `url(${reel.imageURL})`}} >
          <video className={styles.videoPost} >
            <source src='src/assets/Snapinsta.app_video_D64467B8F4DE90CD7597DD5F58D50E98_video_dashinit.mp4' 
            type='video/mp4'></source>
          </video>
    </div>)
        })}
        </div>)
        :(<p className={styles.empty}>empty</p> ) }
        </div>)}
    </div>
  )
}

export default GallaryPost