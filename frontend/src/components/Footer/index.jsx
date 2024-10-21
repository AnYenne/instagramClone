import styles from './Footer.module.scss'
import React from 'react'
import Button from '../UI/Button'

const Footer = () => {
  return (
    <>
      <div className={styles.title}>
          <Button text stylesCustom={{ color: "#969393", fontSize: "14px" }} >Meta</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "14px" }} >About</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "14px" }} >Blog</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "14px" }} >Jobs</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "14px" }} >Help</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "14px" }} >API</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "14px" }} >Privacy</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "14px" }} >Terms</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "14px" }} >Locations</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "14px" }} >Instagram Lite</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "14px" }} >Threads</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "14px" }} >Contact Uploading & Non-Users</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "14px" }} >Meta Verified</Button>
      </div>
      
      <div className={styles.infor}>
        <select>
            <option>English</option>
        </select>

        <p>© 2024 Instagram from Meta</p>

      </div>
    </>
  )
}

export default Footer