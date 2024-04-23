import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//3rd party library imports together and my Components below
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";

/* We need nested routes when we want a part of the UI to be controlled by a part of the URL.
In this case when I show the list of cities in the Sidebar, the list of cities is controlled 
by this part of the URL http://localhost:5173/app/cities So the cities list is displayed bc 
in the URL we have cities. When user clicks on the countries tab the last part of the URL 
changes to countries, the list of countries is displayed in the UI. So this path 
http://localhost:5173/app/cities and this path http://localhost:5173/app/countries determines
which component is rendered inside the bigger AppLayout component. The AppNav component gives
//me the ability to move between the cities and countries nested routes. It's very similar to 
a tabs component but implemented in a different way. Before if we wanted to implement a tab 
component where I have the cities and countries tabs where the content on the UI changes according
to which is the active tab, I wouldve implemented it using the useState hook to manage the 
currently active tab. But with react router, instead of using the useState hook to manage state
I allow react router and the URL to store that state of the active tab. So when the URL changes
then react router changes which tab is currently active. React router is a new way of thinking
about how we build an application. We still build components like accordions or tab components
using the useState hook. But the overall navigation of the application in the real world is 
always managed by something like react router. That includes a small sub naviagtion like the 
cities and countries lists. REVIEW: How I implemented the nested routes in App.jsx inside anoterh
route element, then we rendered whatever the nested route wants to render inside the Outlet 
component. Then to switch between the nested routes we implemented AppNav with the NavLink 
components to link between the different URLs which in this case are the sub URLs cities and 
countries. The sub routes of cities and countries. */

//Defined 3 child routes of the app Route. Where are the <p> elements on the child routes
//going to be displayed in the UI? But HOW are we going to display one component/element
//inside another component. How is List of cities and countries element/component going to be
//displayed inside another component? Bc the cities and countries element/component should
//be displayed inside of the Sidebar component instead of the hardcoded <p> element. This is
//where I will use the <Outlet /> element/component provided by react router comes into play.

const BASE_URL = "http://localhost:8000"; //makes base URL more reusable

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Load the data on mount/initial render of this component.
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data); //set cities with the data that comes from API
      } catch {
        alert("There was an error loading data...");
      } finally {
        //to set loading state back to false
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          {/* this is the first step which was to create a route with
          this path linked to this City component. So whenever URL takes
          this shape cities/:id it will then render the city component. 2nd step is to link 
          to this new Route URL here cities/:id. We want to do that inside each of the CityItems
          rendered from CityList. When I click on one of the cities the id from the city will 
          get passed into the URL and we move to this other component called City. Then the 3rd
          step we can read the data from the URL into this City component */}
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
//I'm using App.jsx solely for the Route paths and their associated components.
//So when user clicks on the start tracking now (button)Link to /app it takes them to the AppLayout
//component.

//In this project I am using React Router and CSS Modules
//<NavLink> and <Link> are both part of the react router library and are used for client
//side routing in React Apps.<NavLink> provides additional props like activeClassName,
//activeStyle, exact, isActive, etc., which allow you to customize the appearance or
//behavior of the link based on whether it matches the current URL.
export default App;
