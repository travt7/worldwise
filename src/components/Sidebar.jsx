import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <>
      <div className={styles.sidebar}>
        <Logo />
        <AppNav />

        {/* {children} but using child routes instead of components/elements so we use something
        similar that is the Outlet element and not {children} So Outlet displays any and all
        children to the app route. See the app route's children in App.jsx which is a file 
        committed to Route handling and react router sees the child in the URL such as 
        http://localhost:5173/app/cities cities here in this example. So this: 
        <Route path="cities" element={<p>List of cities</p>} /> is the child path placed 
        //into the Outlet element.*/}
        <Outlet />
        {/* In this application we want cities to be shown by default along with the app path
        http://localhost:5173/app/cities because we don't want an empty Sidebar. We can do this
        with an index route. An index route is the default child route that will be matched to 
        app route if none of the other routes match. Because we don't want 
        http://localhost:5173/app So with index, this will be the default as soon as we open the application
        <Route index element={<p>List of cities</p>} />*/}

        <Footer />
      </div>
    </>
  );
}
//sidebar of cities on left and footer for copyright.

export default Sidebar;
