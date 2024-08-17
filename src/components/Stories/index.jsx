import React from 'react'
import styles from './Stories.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import Slide from '../UI/Slide'
import Story from '../../pages/Story'


const Stories = () => {
    const stories = [
        {id:1,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:2,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:3,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:4,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:1,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:2,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:3,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:4,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:1,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:2,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:3,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:4,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:1,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:2,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:3,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:4,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:1,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:2,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:3,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:4,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:1,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:2,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:3,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:4,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },{id:1,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:2,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:3,
          story: '/screenshot1.png',
          name: 'story cua tui'
        },
        {id:4,
          story: '/screenshot1.png',
          name: 'story cua tui'
        }
    ]    
    let lengthItem = stories.length;
  return (<>
        
       {/* <div className={styles.content}>
            <div className={styles.directButton}>
                <FontAwesomeIcon size='2x' icon={faCircleChevronLeft} />
                <FontAwesomeIcon size='2x' icon={faCircleChevronRight} />
                
            </div>
           
          <div className={styles.storyFrame}>
            {stories.map((story, index) => {
              return (
                  <div key={index} className={styles.story}>
                    <img className={styles.avatarFrame} src={story.story || '/screenshot1.png'}/>
                    <span className={styles.name}>{story.name || 'name'}</span>
                  </div> )})}
            </div>
        </div> */}
{/*  */}

        <Slide size='2x' storyFrame lengthSlide={666} >
            {stories.map((story, index) => {
              return (
                  <div key={index} className={styles.story}>
                    <img className={styles.avatarFrame} src={story.story || '/screenshot1.png'}/>
                    <span className={styles.name}>{story.name || 'name'}</span>
                  </div> )})}
        </Slide>
        
    </> )
}

export default Stories