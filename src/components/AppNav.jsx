import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}
//NavLink gives us a way to move between the nested cities and countries routes instead of
//manually typing them into the URL so I need to implement the App Navigation component here.
//I repreat exactly the path(cities and countries) that I specified in the nested routes in App.jsx.

//When user clicks on NavLink it gives us an active class that I used in
//import styles from "./AppNav.module.css"; it's CSS module:
/* .nav a:global(.active) {
  background-color: var(--color-dark--0);
} */
//This is why when user clicks on cities the cities li element is the active element and
//becomes dark and same thing with countries

//AppNav and Logo are located in Sidebar component

export default AppNav;
