import {useEffect, useState} from 'react'
import styles from './Story.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faVolumeHigh,faEllipsis, faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane, faHeart } from '@fortawesome/free-regular-svg-icons'
function Story(){
    useState()
    useEffect(()=>{

    },[])

    return (
        <div className={styles.containerLayout}>

            <div className={styles.container}>
                <div className={styles.others}>
                    <div className={styles.otherContent}>
                            <div  className={styles.otherStory}>
                                <img className={styles.otherAvatarFrame} src={ '/screenshot1.png'}/>
                                <span className={styles.otherName}>{'name'}</span>
                                <span className={styles.otherTime}>{'2m'}</span>
                            </div> 
                    </div>
                </div>
                <div className={styles.prebtn}>
                <FontAwesomeIcon icon={faCircleChevronLeft} size='lg' />
                </div>
                
                <div className={styles.content}>
                    <div className={styles.timeline}>
                        <div className={styles.backgroundLine}></div>
                        <div className={styles.backwardLine}></div>
                    </div>
                    <div className={styles.nameDetail}>
                        <div className={styles.accountDetail}>
                            <div className={styles.avatar}>
                                <img  className={styles.avatarFrame} src='/screenshot1.png'/>
                            </div>
                            <div className={styles.name}>Uyen.sjd</div>
                            <div className={styles.time}>53m</div>
                        </div>
                        <div className={styles.funcArea}>
                            <div className={styles.sound}>
                            <FontAwesomeIcon icon={faVolumeHigh} />
                            </div>
                            <div className={styles.play}>
                            <FontAwesomeIcon icon={faPlay} />

                            </div>
                            <div className={styles.otherFunc}>
                            <FontAwesomeIcon icon={faEllipsis} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomDetail}>
                        <div className={styles.comment}></div>
                        <div className={styles.heart}>
                        <FontAwesomeIcon icon={faHeart} size='sm' />
                        </div>
                        <div className={styles.direct}>
                        <FontAwesomeIcon icon={faPaperPlane}  size='sm'/>
                        </div>
                    </div>
                </div>

                <div className={styles.nextbtn}>
                <FontAwesomeIcon icon={faCircleChevronRight} size='lg' />
                </div>
                
                
                <div className={styles.others}>
                    <div className={styles.otherContent}>
                            <div  className={styles.otherStory}>
                                <img className={styles.otherAvatarFrame} src={ '/screenshot1.png'}/>
                                <span className={styles.otherName}>{'name'}</span>
                                <span className={styles.otherTime}>{'2m'}</span>
                            </div> 
                    </div>
                    <div className={styles.otherContent}>
                                <div  className={styles.otherStory}>
                                    <img className={styles.otherAvatarFrame} src={ '/screenshot1.png'}/>
                                <span className={styles.otherName}>{'name'}</span>
                                <span className={styles.otherTime}>{'21h'}</span>
                                </div> 
                    </div>
                    <div className={styles.otherContent}>
                            <div  className={styles.otherStory}>
                                <img className={styles.otherAvatarFrame} src={ '/screenshot1.png'}/>
                                <span className={styles.otherName}>{'name'}</span>
                                <span className={styles.otherTime}>{'14h'}</span>
                            </div> 
                    </div>

                </div>

                

            </div>

        </div>
    )
}
export default Story