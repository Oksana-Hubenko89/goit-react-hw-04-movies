import Navigation from '../Navigation/Navigation';
import styles from './AppBar.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function Appbar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
};
