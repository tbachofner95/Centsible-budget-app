import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Centsible. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
