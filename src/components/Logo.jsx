import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}
//Using a Link instead of a NavLink bc I don't want to use any special styles when the
//Logo is selected

export default Logo;
