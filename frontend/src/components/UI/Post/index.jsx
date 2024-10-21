// 1. Import thư viện từ bên thứ ba.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleChevronLeft, faCircleChevronRight, faSave, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
import { faIcons, faMessage } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis'
import { faBookmark, faComment, faFaceSmile, faPaperPlane } from '@fortawesome/free-regular-svg-icons'

// 2. Import các module liên quan đến React.
import React, { useEffect, useRef, useState,} from 'react'

// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
// 6. Import các style.
import styles from './Post.module.scss'

const Post = () => {

    let greenstick = true;
    let time = '4h';
    let likes = '12,123';
    let user = 'ielts'
    let music = 'love story';
    let content = ' ';

    const fakeDatabase = {
        posts: [
          {
            id: 1,
            userId: 101,
            username: "johndoe",
            caption: "Chuyến du lịch tuyệt vời!",
            timestamp: "2024-10-01T10:00:00Z",
            likes: 150,
            comments: [
              { userId: 102, username: "janedoe", text: "Trông thật tuyệt!" },
              { userId: 103, username: "bobsmith", text: "Ước gì tôi cũng ở đó." }
            ],
            media: [
              { type: "image", url: "src/assets/cd22577012fbf6d4f7ce7bdb22c557a7.jpg" },
              { type: "image", url: "src/assets/gary-bendig-Yu-qayee34c-unsplash.jpg" },
              { type: "video", url: "src/assets/Snapinsta.app_video_D64467B8F4DE90CD7597DD5F58D50E98_video_dashinit.mp4" }
            ]
          },
          {
            id: 2,
            userId: 102,
            username: "janedoe",
            caption: "Bữa tối ngon tuyệt!",
            timestamp: "2024-10-01T18:30:00Z",
            likes: 75,
            comments: [
              { userId: 101, username: "johndoe", text: "Nhìn ngon quá!" }
            ],
            media: [
              { type: "image", url: "src/assets/gary-bendig-Yu-qayee34c-unsplash.jpg" }
            ]
          },
          {
            id: 3,
            userId: 103,
            username: "bobsmith",
            caption: "Cập nhật dự án mới",
            timestamp: "2024-10-02T09:15:00Z",
            likes: 200,
            comments: [
              { userId: 104, username: "alicejohnson", text: "Tuyệt vời! Không thể đợi để xem kết quả." },
              { userId: 105, username: "charliebrown", text: "Ấn tượng quá!" }
            ],
            media: [
              { type: "image", url: "http://example.com/images/project_preview.jpg" },
              { type: "video", url: "src/assets/Snapinsta.app_video_D64467B8F4DE90CD7597DD5F58D50E98_video_dashinit.mp4" }
            ]
          }
        ],
        users: [
          { id: 101, username: "johndoe", fullName: "John Doe", profilePicture: "http://example.com/profiles/johndoe.jpg" },
          { id: 102, username: "janedoe", fullName: "Jane Doe", profilePicture: "http://example.com/profiles/janedoe.jpg" },
          { id: 103, username: "bobsmith", fullName: "Bob Smith", profilePicture: "http://example.com/profiles/bobsmith.jpg" },
          { id: 104, username: "alicejohnson", fullName: "Alice Johnson", profilePicture: "http://example.com/profiles/alicejohnson.jpg" },
          { id: 105, username: "charliebrown", fullName: "Charlie Brown", profilePicture: "http://example.com/profiles/charliebrown.jpg" }
        ]
      };

      const leftBtn = useRef('');
      const rightBtn = useRef('');
      const images = useRef('');
      const [totalLength, setTotalLength] = useState(0)
     
      const lengthItems = ()=>{
        setTotalLength()
        return  (images.current.clientWidth) *((images.current.childElementCount) -1 )}
      // find the total of length of Images (the defaul size of image * total images)
      // check 
      useEffect(()=>{
        lengthItems()
      },[images.current.childElementCount, totalLength])

      const handleNextImages = () => {
          console.log(images.current.clientWidth)
      }
      const handleBackImages = () => {
        console.log(images.current.clientWidth)
    }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
                <div className={styles.avatar}>
                    <img src='src/assets/cd22577012fbf6d4f7ce7bdb22c557a7.jpg' className={styles.avatarFrame} />
                </div>
                <div className={styles.contentHeader}>
                    <div className={styles.contentHeaderName}>
                        <div className={styles.username}>
                            x_xellybabyx
                        </div>
                        {greenstick && <FontAwesomeIcon className={styles.greenstick}  icon={faCircleCheck} style={{ color:'#0095F6'}} size='sm' />}
                        <div className={styles.timeline}>
                        {time && <p>{time}</p>}  
                        </div>
                    </div>
                    
                    {music && (<div className={styles.musicSong}>{music} </div>)}

                </div>

                <div className={styles.more}>
                    <FontAwesomeIcon icon={faEllipsis} className={styles.moreIcon}/>
                </div>
        </div>
        <div className={styles.body}>
            <div ref={images} className={styles.images}>
                <img src='src/assets/gary-bendig-Yu-qayee34c-unsplash.jpg' className={styles.images}/>
                <video className={styles.videoPost}   autoPlay loop>
                    <source src='src/assets/Snapinsta.app_video_D64467B8F4DE90CD7597DD5F58D50E98_video_dashinit.mp4' 
                    type='video/mp4'></source>
                </video>
                <img src='src/assets/cd22577012fbf6d4f7ce7bdb22c557a7.jpg' className={styles.images}/>
                <img src='src/assets/gary-bendig-Yu-qayee34c-unsplash.jpg' className={styles.images}/>
                <img src='src/assets/martin-arusalu-0x0OzwRcBw8-unsplash.jpg' className={styles.images}/>

                {/* <img src='src/assets/martin-arusalu-0x0OzwRcBw8-unsplash.jpg' className={styles.images}/> */}
                {/* video find the default size for image and video */}
            </div>

            <div className={styles.direction}>
          
                <div className={styles.directionBtns}>
                  <div onClick={() => handleBackImages()} ref={leftBtn} className={styles.directBtn} >
                    <FontAwesomeIcon  icon={faCircleChevronLeft} size='3x'  />
                  </div>
                  <div ref={rightBtn} onClick={() => handleNextImages()} className={styles.directBtn}>
                    <FontAwesomeIcon icon={faCircleChevronRight} size='3x' />
                  </div>
                </div>

                <div className={styles.selectDirection}></div>
          
          </div>

        </div>
        
        <div className={styles.detail}>
                <div className={styles.functions}>
                    <div className={styles.functionLeft} >
                    <FontAwesomeIcon size='xl'  icon={faHeart} className={styles.like} />
                    <FontAwesomeIcon size='xl'  icon={faComment} className={styles.comment} />
                    <FontAwesomeIcon size='xl'  icon={faPaperPlane} className={styles.direct} />
                    </div>
                    <div className={styles.functionRight} >
                    <FontAwesomeIcon  size='xl' icon={faBookmark} className={styles.save} />
                    </div>
                </div>
                <div className={styles.likeTotal}>{likes} likes</div>
                <div className={styles.postContent}>
                    <p className={styles.user}>x_xellybabyx</p>
                    {content && (<p className={styles.caption}>{content}</p>)}
                </div>
                <div className={styles.viewComment}>
                    View all 17 comments
                </div>
                <div className={styles.writeComment}>
                    <input type='text' placeholder='add a comment' />
                    <FontAwesomeIcon className={styles.emotionIcon} icon={faFaceSmile} />
                </div>
        </div>
    </div>
  )
}

export default Post