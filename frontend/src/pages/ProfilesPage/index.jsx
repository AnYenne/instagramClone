// 1. Import thư viện từ bên thứ ba.
import clsx from 'clsx';
// 2. Import các module liên quan đến React.
// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
import Profile from '../../components/Profiles';
import LeftBar from '../../components/LeftBar';

// 6. Import các style.
import styles from './ProfilesPage.module.scss';


const ProfilesPage = () => {
  return (
  <div className={styles.container}>
        
      <div className={clsx(styles.leftBar, '')}><LeftBar /></div>

      <div className={styles.rightPC}>
        <div className={clsx(styles.center, '')}><Profile/></div>
      </div>
  </div>
  )
}

export default ProfilesPage