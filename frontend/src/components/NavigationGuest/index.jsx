// 1. Import thư viện từ bên thứ ba.
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass,faCompass
    ,faClapperboard,
    // faFacebookMessenger,
    faHeart,
    faSquarePlus,
    // faThreads,
    faBars,
    faMagnifyingGlassArrowRight,
    faHeartBroken,
    faHeartCircleCheck,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons'
import { divide } from 'fontawesome'

// 2. Import các module liên quan đến React.
import React from 'react'
import { useState } from 'react'
// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
// 6. Import các style.

import styles from './NavigationGuest.module.scss'
import Button from '../UI/Button'
import clsx from 'clsx'
import { faHeartCircleBolt } from '@fortawesome/free-solid-svg-icons/faHeartCircleBolt'

const NavigationGuest = () => {
    const [username, setUserName] = useState('met_shin')
    const [devide, setDevide] = useState('mobile')
  return (
    <div className={styles.container}>
      
        {/* start part 2 PC */}
        <div className={styles.center}>
            <div className={styles.navItem}>
               <Link to="/" >
               <Button btn normal stylesCustom={{display: "flex", alignItems:"center", justifyContent:"center"}}>
            <FontAwesomeIcon size="lg" style={{margin: "10px 16px",width: "fit-content"}} icon={faHouse} />
                 <p style={{}}>Home</p>
               </Button>
               </Link>
               </div>
              {devide !== 'mobile' && ( 
              <div className={styles.navItem}>
               <Link to="/search">
               <Button btn normal stylesCustom={{display: "flex", alignItems:"center", justifyContent:"center"}}>
               <FontAwesomeIcon size="lg" style={{margin: "10px 16px",width: "fit-content"}} icon={faMagnifyingGlass} />
               <p style={{}}>Search </p>
               </Button>

               </Link>
               </div>)}
            <div className={styles.navItem}>
               <Link to="/explore">
               <Button btn normal stylesCustom={{display: "flex", alignItems:"center", justifyContent:"center"}}>
            <FontAwesomeIcon size="lg" style={{margin: "10px 16px",width: "fit-content"}} icon={faCompass} />
                 <p style={{}}>Explore</p>
                 </Button>

               </Link>
               </div>
            <div className={styles.navItem}>
               <Link to="/reel">

               <Button btn normal stylesCustom={{display: "flex", alignItems:"center", justifyContent:"center"}}>
            <FontAwesomeIcon size="lg" style={{margin: "10px 16px",width: "fit-content"}} icon={faClapperboard} />
                  
                 <p style={{}}>Reels</p>
                 </Button>
               </Link>
               </div>
            <div className={styles.navItem}>
               <Link to="/message">
               <Button btn normal stylesCustom={{display: "flex", alignItems:"center", justifyContent:"center"}}>
            <FontAwesomeIcon size="lg" style={{margin: "10px 16px",width: "fit-content"}} icon={faFacebookMessenger} />
                 <p style={{}}>Messages</p>
                 </Button>

               </Link>
               </div>
            {devide !== 'mobile' && (<div className={styles.navItem}>
               <Link to="">
               <Button btn normal stylesCustom={{display: "flex", alignItems:"center", justifyContent:"center"}}>
            <FontAwesomeIcon size="lg" style={{margin: "10px 16px",width: "fit-content"}} icon={faHeart} />
                 <p style={{}}>Notifications</p>
                 </Button>

               </Link>
               </div>)}
            <div className={clsx(styles.navItem, styles.create)}>
               <Link to="">
               <Button btn normal stylesCustom={{display: "flex", alignItems:"center", justifyContent:"center"}}>
            <FontAwesomeIcon size="lg" style={{margin: "10px 16px",width: "fit-content"}} icon={faSquarePlus} />
                 <p style={{}}>Create</p>
                 </Button>

               </Link>
               </div>

            <div className={styles.navItem}>
               <Link to="">

               <Button btn normal stylesCustom={{display: "flex", alignItems: 'center', width: '100%', justifyContent: 'center'}}>
            <span >
                  <img src={username.avatar || '/images.png'} className={styles.avatarFrame} />
            </span>
                 <p style={{}}>Profile</p>
                 </Button>
               </Link>
               </div>
            


        </div>
      
        
    </div>
  )
}

export default NavigationGuest