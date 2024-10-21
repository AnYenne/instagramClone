import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../Responsive.css'
import styles from './Profiles.module.scss'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import GallaryPost from '../UI/GallarysPost'
const Profile = () => {

    const examplePost = [{
        id:1,
        image:'frontend/src/assets/cd22577012fbf6d4f7ce7bdb22c557a7.jpg'
    },
    {
        id:2,
        image:'frontend/src/assets/cd22577012fbf6d4f7ce7bdb22c557a7.jpg'
    },{
        id:3,
        image:'frontend/src/assets/cd22577012fbf6d4f7ce7bdb22c557a7.jpg'
    },
    {
        id:4,
        image:'frontend/src/assets/cd22577012fbf6d4f7ce7bdb22c557a7.jpg'
    },{
        id:5,
        image:'frontend/src/assets/cd22577012fbf6d4f7ce7bdb22c557a7.jpg'
    },
    {
        id:6,
        image:'frontend/src/assets/cd22577012fbf6d4f7ce7bdb22c557a7.jpg'
    },{
        id:7,
        image:'frontend/src/assets/cd22577012fbf6d4f7ce7bdb22c557a7.jpg'
    }]



  return (
    <div className={clsx(styles.container,'grid', 'wide' )}> 
        {/* detail infor of account */}
        <div className={clsx(styles.accountDetails,'row' )}>
            <div className={clsx(styles.avatar,'col', 'c-3','l-3')}>
                <img src='frontend/src/assets/martin-arusalu-0x0OzwRcBw8-unsplash.jpg' className={clsx(styles.avatarFrame)} />
            </div>
            <div className={clsx(styles.accountDetails,'col', 'c-9', 'l-9')}>
                <div className={clsx(styles.usernameDetailsLines, 'row')}>
                    <div className={clsx(styles.username,'col', 'c-3', 'l-3')} > _w0v3ly_</div>
                    <div className={clsx(styles.otherbtn,'col', 'c-9', '', 'l-2', 'l-o-1')}>...</div>
                    <div className={clsx(styles.functionbtn,'col', 'c-3', '','l-2')}>follow</div>
                    <div className={clsx(styles.functionbtn,'col', 'c-3', '', 'l-2', 'l-o-1')}>message</div>
                    <div className={clsx(styles.functionbtn,'col', 'c-3', '', 'l-2', 'l-o-1')}>add</div>
                </div>                
            </div>
            <div className={clsx(styles.inforDetails,'row')}>
                    <div className={clsx(styles.numberDetailsLines,'col','c-12', 'l-o-3', 'l-9')}>
                                <div>39 <span>posts </span></div>
                                <div> 194 <span>followers </span></div>
                                <div>2.431 <span>following</span></div>
                    </div>
                    <div className={clsx(styles.mobileAccountDetails, 'col','c-12','l-o-3', 'l-9')}>

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
            {/* <div className={clsx(styles.functionbtn)}> message</div> */}

        </div>
        {/* content post, reel... */}
        <div className={clsx(styles.accountContents, '')}>
            <div>posts</div>
            <div>reel</div>
            <div>tag</div>
            
        </div>
        <GallaryPost data={examplePost}/>


    </div>
  )
}
 

export default Profile