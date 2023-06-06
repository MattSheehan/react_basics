import {Component} from "react";
import "./styles/App.css";
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
import PageTitle from "./components/PageTitle/PageTitle.component";

export class App extends Component {
  /* ReactDOM.constructor() --> Class Lifecycle method = first called and creates and initializes state. */
  constructor() {
    super();
    this.state = {
      user: [],
      searchInput: ""
    };
  }
  /* ReactDOM.componentDidMount(): --> Class Lifecycle method = Setting state here triggers ReactDom.render().
   *  fetch(url) --> Request sent to the url"s API
   *  then() --> Callback argument for the API Response
  */
  componentDidMount = () => {
    const url = ("https://jsonplaceholder.typicode.com/users");
    fetch(url)
    .then((response) => response.json())
    .then((users) => 
      this.setState(() => {
        return {user: users}; 
      })
    )
  }
  /* onSearchChange(event) --> Private Class method = takes in event, returns instance of the state object matching event */
  onSearchChange = (event) => {
    const searchInput = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchInput };
    });
  }
  /* ReactDOM.render() --> Class method passes (JavaScript + HTML + CSS) casted as HTML, inside <root> element. */
  render = () => {
    const { user, searchInput } = this.state;
    const { onSearchChange } = this;
    const filterUsers = user.filter((user) => {
      return (user.username.toLowerCase().includes(searchInput));
    });
    return (
      <div className="App">
        <div className="App-header">
          <PageTitle title={"M a d - T e a - S h o p"}/>
        </div>
        <div className="App-header">
          <SearchBox onChangeHandler={onSearchChange} placeholder={"search users"} searchTitle={"P r o f i l e s"}/>
          <CardList user={filterUsers}/>
        </div>
      </div>
    );
  };
}