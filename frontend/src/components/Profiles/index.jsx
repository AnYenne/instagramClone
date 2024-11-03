// 1. Import thư viện từ bên thứ ba.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { faArchive, faClapperboard, faClipboardUser, faSave, faTableCells } from '@fortawesome/free-solid-svg-icons'
// 2. Import các module liên quan đến React.
import { useState, useEffect, useLayoutEffect } from 'react'
// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
import GallaryPost from '../UI/GallarysPost'

// 6. Import các style.
import '../../Responsive.css'
import styles from './Profiles.module.scss'
const Profile = () => {

    const [profile, setProfile] = useState({});
    const [activeField, setActiveField] = useState('post')
    const [post, setPost] = useState({});
    const [reel, setReel] = useState({});
    const [save, setSave] = useState({});
    const [tag, setTag] = useState({});
    const userId = '670c9f80c1093fcb59b96586'

    //GET data of user
    useEffect(()=>{
        fetch(`http://localhost:5000/api/users/${userId}`)
        .then(response => {
           return response.json()
        })
        .then(json => {
            setProfile(json[0])
            return console.log(json)
        })
        .catch(err => console.log(err))
    },[])
    console.log(profile)


     //Get data of post
    useEffect(()=>{
        fetch(`http://localhost:5000/api/posts/user/${userId}`)
        .then(response => {
            return response.json()
        })
        .then(json => {
            setPost(json)
            return console.log(json)
        })
    },[])
    console.log(post)

    const handleFields = (field) => {
        setActiveField(field)
        console.log(field)
    }
    

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
                    <div className={clsx(styles.username,'col', 'c-3', 'l-3')} >{profile ? profile.username : '_w0v3ly_'}</div>
                    <div className={clsx(styles.otherbtn,'col', 'c-9', '', 'l-2', 'l-o-1')}>...</div>
                    <div className={clsx(styles.functionbtn,'col', 'c-3', '','l-2')}>follow</div>
                    <div className={clsx(styles.functionbtn,'col', 'c-3', '', 'l-2', 'l-o-1')}>message</div>
                    <div className={clsx(styles.functionbtn,'col', 'c-3', '', 'l-2', 'l-o-1')}>add</div>
                </div>                
            </div>
            <div className={clsx(styles.inforDetails,'row')}>
                    <div className={clsx(styles.numberDetailsLines,'col','c-12', 'l-o-3', 'l-9')}>
                                <div>{post ? post.length : '0'}<span>posts </span></div>
                                <div> {profile ? profile.no_of_followers : ' 194'} <span>followers </span></div>
                                <div>{profile ? profile.no_of_following : ' 214'}<span>following</span></div>
                    </div>
                    <div className={clsx(styles.mobileAccountDetails, 'col','c-12','l-o-3', 'l-9')}>

                            <div className={clsx(styles.nameDetailsLines)}>
                            {profile ? profile.name : ' Rose Baker'}
                            </div>
                            <div className={clsx(styles.bioDetailsLines)}>
                            {profile ? profile.bio : ' Cancer'}
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
            <div onClick={(e) => handleFields('post')} className={clsx({[styles.active]: activeField === 'post'})}  >
                <FontAwesomeIcon icon={faTableCells} />
                <span>posts</span>
            </div>
            <div onClick={(e) => handleFields('reel')}  className={clsx({[styles.active]: activeField === 'reel'})}  >
                <FontAwesomeIcon icon={faClapperboard} />
                <span>reel</span>
            </div>
            <div onClick={(e) => handleFields('save')} className={clsx({[styles.active]: activeField === 'save'})}  >
                <FontAwesomeIcon icon={faSave} />
                <span>save</span>
            </div>
            <div onClick={(e) => handleFields('tag')} className={clsx({[styles.active]: activeField === 'tag'})}  >
                <FontAwesomeIcon icon={faClipboardUser} />
                <span>tag</span>
            </div>
            
        </div>
       {post ? ( <GallaryPost data={post} type={activeField}/>) :  ( <GallaryPost data={examplePost}/>) }


    </div>
  )
}
 

export default Profile