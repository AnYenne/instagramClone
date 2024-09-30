import React from 'react'
import styles from './Stories.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import Slide from '../UI/Slide'
import Story from '../../pages/Story'

 
/* stories is using map a story list with Slide function to direction 
edit file if has bug with size of story frame, name of user*/
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