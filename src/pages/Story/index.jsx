import {useState} from 'react'
import styles from './Story.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faVolumeHigh,faEllipsis, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane, faHeart } from '@fortawesome/free-regular-svg-icons'
function Story(){

    return (
        <div className={styles.containerLayout}>

            <div className={styles.container}>
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

                <div>
                <FontAwesomeIcon icon={faCircleChevronRight} />
                </div>

                <div className={styles.otherContent}>

                </div>

            </div>

        </div>
    )
}
export default Story