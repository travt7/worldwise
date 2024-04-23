import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CountryList({ cities, isLoading }) {
  //if isLoading is truthy then return a spinner something indicating the page
  //is loading.if isLoading is falsey then return the list of cities. For each city object
  //I want to create one city component.

  //Receive the cities array as a prop just like the CityList Component. I derive the
  //countries from the cities array of objects. Should I derive the countries from the cities
  //object array prop in this component or the App component where the cities state lives and
  //and then pass the countries into the CountriesList component in the Route?

  //Probably better to pass the cities array of objects piece of state into this CountriesList
  //and then derive the countries. BC that operation only needs to happen when CountriesList
  //component is executed. If we do it the App component the calculation will happen each
  //time the Application re renders.
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  //derive a countries array from the cities array. The idea is to create a new array called
  //countries which only contains the countries where the city name is unique.
  /* If the accumulator 'countriesArr' will be returned unchanged in the first iteration, what happens 
  on the second iteration? In the second iteration, the accumulator arr will contain one element, 
  which was added during the first iteration. This element will be an object representing the 
  country of the first city in the cities array. So, during the second iteration, the if 
  condition will check if the country of the second city in the cities array is already present 
  in the countries array (i.e., the accumulator arr). If the country is not present, a new entry
  representing the country of the second city will be added to the countries array.

If the country is already present in the countries array, the else block will be executed, and 
the arr will be returned unchanged.

This process will continue for each city in the cities array until all cities have been processed
and the reduce method completes its iterations, resulting in the countries array containing 
unique country entries extracted from the cities array. */

  const countries = cities.reduce((countriesArr, city) => {
    if (!countriesArr.map((el) => el.country).includes(city.country))
      //conditional maps over the accumulator/array/countriesArr and checks
      //the country property of each element/object
      //If the current element's(current el in reduce method is city arg) country property in
      //the cities array is NOT included(the ! makes it NOT) in any of
      //the elements of countriesArr,
      //the condition evaluates to true. Checks whether the countries array already contains an object
      //with the same country name as the current city being iterated.

      return [...countriesArr, { country: city.country, emoji: city.emoji }];
    else return countriesArr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

/* BEST explanation of what's going on in the reduce method: In the first iteration, since the 
accumulator countriesArr starts as an empty array ([]), the if condition will evaluate to true. 
This is because the map() method applied to countriesArr will return an empty array in the 
initial iteration, and includes(city.country) will return false since the countriesArr is empty.

Therefore, in the first iteration, the if block will execute, and a new array will be returned 
by spreading the existing countriesArr and adding a new object representing the country of the 
current city ({ country: city.country, emoji: city.emoji }). This new object will be appended to 
the initially empty countriesArr. */

export default CountryList;
