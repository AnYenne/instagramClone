import Profile from '../../components/Profiles';
import styles from './ProfilesPage.module.scss';
import LeftBar from '../../components/LeftBar';
import clsx from 'clsx';

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