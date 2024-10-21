import styles from './RightBar.module.scss'
import React from 'react'
import Button from '../UI/Button'


const RightBar = () => {

  const suggestList = [
    {id:1,
      name: "_passion_cheese",
      avatar: '/images.png',
      type: "suggested for you"
    },
    {id:2,
      name: "instagram",
      avatar: '/images.png',
      type: "popular"
    },
    {id:3,
      name: "cainaylafake",
      avatar: '/images.png',
      type: "suggested for you"
    },
    {id:4,
      name: "dsddccc",
      avatar: '/images.png',
      type: "suggested for you"
    },
    {id:5,
      name: "himesss",
      avatar: '/images.png',
      type: "suggested for you"
    },
    
  ]

  return (
    <div className={styles.container}>
        
        <div className={styles.TopRight}>
         <div className={styles.content}>
            <div className={styles.imageAvatar}>
                  <img src='/images.png' className={styles.avatarFrame} />
            </div>

            <div className={styles.nameFrame}>
                  <div className={styles.username}>ten account</div>

                  <div className={styles.accountName}>ten</div>

            </div>
          </div>
            <div className={styles.primaryButton}>switch</div>    
          </div>
        <div className={styles.centerRight}>
          <div className={styles.titleSuggest}>
              <div className={styles.title}> Suggested for you </div>
              <div> See All </div>
          </div>
          <div>
            {/* list suggest accounts */}
            {suggestList.map(list => {
              return (
                <div className={styles.TopRight}>
                  <div className={styles.content}>
                  <div className={styles.imageAvatar}>
                        <img src={ list.avatar ||'/images.png'} className={styles.avatarFrame} />
                  </div>

                  <div className={styles.nameFrame}>
                        <div className={styles.username}>{list.name || 'ten account'}</div>

                        <div className={styles.accountName}>{list.type || 'ten'}</div>

                  </div>
                </div>
                  <div className={styles.primaryButton}>Follow</div>    
                </div>

              )
            })}
                
                
              </div>
              

          </div>
        <div style={{}} className={styles.bottomRight}>
        <Button  text> <a href='/'> About</a></Button>
        <Button  text> <a href='/'> Help</a></Button>
        <Button text> <a href='/'>Press</a></Button>
        <Button  text> <a href='/'> API</a></Button>
        <Button  text> <a href='/'> obs</a></Button>
        <Button text> <a href='/'>Privacy</a></Button>
        <Button  text> <a href='/'> Terms</a></Button>
        <Button  text> <a href='/'> Locations</a></Button>
        <Button  text> <a href='/'> Language</a></Button>
        <Button  text> <a href='/'> Meta Verifieds</a></Button> 
</div>
        <span style={{display: "inline-block"}}>© 2024 INSTAGRAM FROM META</span>
    </div>
  )
}

export default RightBar