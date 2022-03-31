import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav styele={styles.nav}>
      <h3>
        <span>JARANS</span> REAL ESTATE COMPANY
      </h3>
      <ul className={styles.nav__ul}>
        <a href="">Home</a>
        <a href="">Product</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Service</a>
      </ul>
    </nav>
  );
};

export default Navbar;
