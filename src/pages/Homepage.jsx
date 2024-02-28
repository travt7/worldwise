import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/app" className="cta">
          Start Tracking Now
        </Link>
      </section>
    </main>
  );
}
//this is the homepage and I want a button/link that will take the user to the App Layout
//page. There's a Route path for app in the App.jsx file that takes the user to the AppLayout
//element/component. I'm using App.jsx solely for the Route paths and their associated components.
//So when user clicks on the start tracking now (button)Link to /app it takes them to the AppLayout
//component.
//The cta global classname is located in the index.css
