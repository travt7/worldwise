import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css"; //used code snippet to make this easier.Otherwise I have to type it
//for every file where I import the css module

function AppLayout() {
  return (
    <div className={styles.app}>
      {/* applies flex container so Sidebar only takes up left side and Map takes up
      right side */}
      <Sidebar />
      <Map />
    </div>
  );
}
//sidebar of cities on left and map on right
//Good to have the pages (AppLayout, Homepage, Pricing, Product, Login, PageNotFound) very clean without much
//stuff in them so that most of the code is inside my components folder.

//All AppLayout page does is to add some styles to the page and includes the
//components that are necessary. So Sidebar only takes up left side and Map takes up
//right side.

//Completed static layout.
export default AppLayout;
