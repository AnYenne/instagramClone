import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../Responsive.css'
import styles from './Profiles2.module.scss'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
const Profile2 = () => {
  return (
    <div className={clsx(styles.container,)}> 
        {/* detail infor of account */}
       <div className={clsx(styles.inforDetails,  )}>
            <div className={clsx(styles.avatar,'col', 'c-3','l-3')}>
                <img src='frontend/src/assets/martin-arusalu-0x0OzwRcBw8-unsplash.jpg' className={clsx(styles.avatarFrame)} />
            </div>
            <div>
                <div className={clsx(styles.usernameDetailsLines)}>
                        <div className={clsx(styles.username)}>
                            _w0v3ly_
                        </div>
                        <div className={clsx(styles.functionbtn)}>
                            follow
                        </div>
                        <div className={clsx(styles.functionbtn)}>
                            message
                        </div>
                        <div className={clsx(styles.otherbtn)}>
                            <FontAwesomeIcon icon={faArchive} />
                        </div>
                        
                </div>
                <div className={clsx(styles.numberDetailsLines)}>
                        <div>39 posts</div>
                        <div> 194 followers</div>
                        <div>2.431 following</div>
                </div>
                <div className={clsx(styles.mobileAccountDetails)}>

                    <div className={clsx(styles.nameDetailsLines)}>
                    Rose Baker
                    </div>
                    <div className={clsx(styles.bioDetailsLines)}>
                    Cancer
                    </div>
                    <div className={clsx(styles.contentsDetailsLines)}>
                    I absolutely love psychology,art,makeup, anime, cosplay, aesthetics, games, nostalgia, horror, video games and... 
more
                    </div>
                </div>
                </div>
            </div>
        {/* content post, reel... */}
        <div className={clsx(styles).accountContents}></div>


    </div>
  )
}
 

export default Profile2