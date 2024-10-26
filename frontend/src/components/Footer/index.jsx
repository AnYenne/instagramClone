// 1. Import thư viện từ bên thứ ba.
// 2. Import các module liên quan đến React.
// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
import { width } from '@fortawesome/free-solid-svg-icons/faHeartCircleBolt'
import Button from '../UI/Button'

// 6. Import các style.
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <>
      <div className={styles.title}>
          <Button text stylesCustom={{ color: "#969393", fontSize: "12px", width:"fit-content", padding:"2px" }} >Meta</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "12px", width:"fit-content", padding:"2px" }} >About</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "12px", width:"fit-content", padding:"2px" }} >Blog</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "12px", width:"fit-content", padding:"2px" }} >Jobs</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "12px", width:"fit-content", padding:"2px" }} >Help</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "12px", width:"fit-content", padding:"2px" }} >API</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "12px", width:"fit-content", padding:"2px" }} >Privacy</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "12px", width:"fit-content", padding:"2px" }} >Terms</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "12px", width:"fit-content", padding:"2px" }} >Locations</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "12px", width:"fit-content", padding:"2px" }} >Instagram Lite</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "12px", width:"fit-content", padding:"2px" }} >Threads</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "12px", width:"fit-content", padding:"2px" }} >Contact Uploading & Non-Users</Button>
          <Button text stylesCustom={{ color: "#969393", fontSize: "12px", width:"fit-content", padding:"2px" }} >Meta Verified</Button>
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