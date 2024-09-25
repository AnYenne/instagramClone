import React, { useEffect, useState, useLayoutEffect } from 'react'
import styles from './Slide.module.scss'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
faCircleChevronRight
const Slide = ({size, css, children, storyFrame, lengthItems, lengthSlide}) => {
  const previous = useRef();
  const next = useRef();
  const storyLength = useRef()
  const stories =  useRef();
  const [chieuDai, setChieuDai] = useState(0);
  let preChieuDai = 0;
  var itemAllWidth 
  // const frameWidth = useRef(lengthSlide)

  const aHalf = Number(lengthSlide/2);

  let keyFrame = `
  @keyframes toRight {
    0%{
      stories.current.style.transform = translateX(${chieuDai}px)
      
    }
    100%{
      stories.current.style.transform = translateX(${chieuDai}px)
      
    }
  }
  `
  useLayoutEffect(()=>{
    itemAllWidth = stories.current.offsetWidth
    stories.current.style.transform = 'translateX(0px)'

    
    
  }, [])

  useEffect(()=>{
    if(itemAllWidth > lengthSlide){
      previous.current.style.display = 'none';
    }
    else {
      next.current.style.display = 'none';
      previous.current.style.display = 'none';
    }
  },[])

  useEffect(()=>{
    next.current.addEventListener('click', handleNext)
    console.log('next' + chieuDai)


    return ()=>{
    next.current.removeEventListener('click', handleNext)
    }

  },[chieuDai])


  useEffect(()=>{
    previous.current.addEventListener('click', handlePrevious)
    console.log('pre' + chieuDai)

    return ()=>{
    previous.current.removeEventListener('click', handlePrevious)
    }

  },[chieuDai])

  function handlePrevious() {
    itemAllWidth = stories.current.offsetWidth
    console.log(chieuDai)
    if(chieuDai < -(itemAllWidth - lengthSlide)){
      setChieuDai(-(itemAllWidth - lengthSlide))
      
    } else{
      if( chieuDai <= -aHalf){
        console.log(itemAllWidth, lengthSlide, chieuDai)
        setChieuDai(chieuDai => chieuDai += aHalf)
        stories.current.style.transition = `transform 0.3s ease`
        stories.current.style.transform = `translateX(${chieuDai}px)`
        next.current.style.display = 'block'

  
      } else if(chieuDai > -aHalf ){
        console.log(itemAllWidth, lengthSlide, chieuDai)
        setChieuDai(0)
        stories.current.style.transition = `transform 0.3s ease`
        stories.current.style.transform = `translateX(${chieuDai}px)`
        previous.current.style.display = 'none'
        next.current.style.display = 'block'
      
      } 

    }
    
   
  
  }

  function handleNext(){
   itemAllWidth = stories.current.offsetWidth
    if(((itemAllWidth - lengthSlide )+ chieuDai )< aHalf){
      console.log(itemAllWidth, lengthSlide, chieuDai)
      setChieuDai(chieuDai => chieuDai -= (itemAllWidth - lengthSlide - chieuDai ))
      stories.current.style.transform = `translateX(${chieuDai}px)`
      stories.current.style.transition = `transform 0.3s ease`

      next.current.style.display = 'none';
      console.log('het roi')

    }
     else if((itemAllWidth - lengthSlide) + chieuDai >= aHalf){
      console.log(itemAllWidth, lengthSlide, chieuDai)
      setChieuDai(chieuDai => chieuDai -= aHalf)
      stories.current.style.transform = `translateX(${chieuDai}px)`
      stories.current.style.transition = `transform 0.3s ease`

      console.log('co the next')
      previous.current.style.display = 'block';
      console.log(aHalf)
      
    } 
  }

  // chieu dai tong length story (itemAllWidth)
  // chieu dai cua frame (lengthSlide)
  // chieu dai cua frame phai bi anh / tong - frame
  // chieu dai cua frame trai
  // if(lengthStory <1/2 frame)
  // if (lengthStory >1/2 Frame)
    // if

  return (
    <div className={styles.container}>
        <div className={styles.content } style={{maxWidth:{lengthSlide}+'px'}}>
            <div className={styles.directButton}>
                <div ref={previous}  className={styles.previousButton}>
                  <FontAwesomeIcon size={size} style={css} icon={faCircleChevronLeft} />
                  </div>
                <div ref={next}  className={styles.nextButton}>
                  <FontAwesomeIcon size={size} style={css} icon={faCircleChevronRight} />
                  </div>
                
            </div>
        
            {storyFrame ? 
            (<div  className={styles.storyFrame}>
              <div ref={stories} className={styles.itemAll}>
                {children}</div>
            </div>) : (<div>{children}</div>)}
        </div>
    </div>
  )
}

export default Slide