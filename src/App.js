import {useState, useEffect} from "react";
import "./styles/App.css";
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
import PageTitle from "./components/PageTitle/PageTitle.component";

const url = ("https://jsonplaceholder.typicode.com/users");
const appTitle = ("M a d - T e a - S h o p");
const searchTitle = ("P r o f i l e s");
const searchHolder = ("search for users by entering their username...");

const App = () => {

  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState([]);
  const [filterUsers, setFilterUsers] = useState(user);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  useEffect(() => {
    const newFilteredUser = user.filter((user) => {
      return user.username.toLocaleLowerCase().includes(searchInput);
    });
    setFilterUsers(newFilteredUser);
  }, [user, searchInput]);
  
  const onSearchChange = (event) => {
    setSearchInput(event.target.value.toLowerCase());
  };
  
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