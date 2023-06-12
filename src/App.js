import {useState, useEffect} from "react";
/* custom imports */
import "./styles/App.css";
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
import PageTitle from "./components/PageTitle/PageTitle.component";
/* Global Variables - urls, strings, and other values I don't want to pass directly / re-render */
const url = ("https://jsonplaceholder.typicode.com/users");
const appTitle = ("M a d - T e a - S h o p");
const searchTitle = ("P r o f i l e s");
const searchHolder = ("search for users by entering their username...");

const App = () => {
  /* useState() --> "encapsulates local state of variable within your componenet." */
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState([]);
  const [filterUsers, setFilterUsers] = useState(user);
  /* useEffect($arg1, $arg2) 
   * useEffect( $arg1: callback(), $arg2: dependencies_array[...] (i.e., [state-variables, props]) )
   * whenever a DEPENDENCY is changed, useEffect() calls the code within the callback()
   * Leave the dependency array empty if you want to trigger the callback ONLY 1 time = when the component first mounts
  */
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((users) => setUser(users));
  }, []);
  useEffect(() => {
    const newFilteredUser = user.filter((user) => {
      return user.username.toLocaleLowerCase().includes(searchInput);
    });
    setFilterUsers(newFilteredUser);
  }, [user, searchInput]);
  /* onSearchChange(event) --> returns array = [1: {value we want to store}, 2: {value after typing into search bar}] */
  const onSearchChange = (event) => {
    const activeInput = event.target.value.toLowerCase();
    setSearchInput(activeInput);
  };
  /* return (JavaScript + HTML + CSS) casted as HTML */
  return (
    <div className="App">
      <div className="App-header">
        <PageTitle title={appTitle}/>
      </div>
      <div className="App-header">
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder={searchHolder} 
          searchTitle={searchTitle}
        />
        <CardList user={filterUsers}/>
      </div>
    </div>
  );
};
// export file's reusable or renderable components
export default (App);