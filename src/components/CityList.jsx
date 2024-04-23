import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

//Loading data from my fake API. http://localhost:8000/cities gives me 3 cities to load into the
//application using the fetch function but where should I do this? I
//could do the fetch in this city list bc this is where I will first need
//this data BUT I will also need this data in some other places such as
//CountryList. The Countries will be derived from the cities. I also
//need the data to display the markers on the Map.

//So I'm going to place that data in the App component for now as Global state
//that will be available to all components that need it via props.
function CityList({ cities, isLoading }) {
  //if isLoading is truthy then return a spinner something indicating the page
  //is loading.if isLoading is falsey then return the list of cities. For each city object
  //I want to create one city component.
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
