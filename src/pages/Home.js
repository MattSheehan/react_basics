import React, {Component} from 'react';
import '../styles/App.css';
import UserCard from '../components/Card/UserCard';
import SearchBox from '../components/SearchBox/SearchBox';
import PageTitle from '../components/PageTitle/PageTitle';
/*  
  ReactDOM.contructor():
    Class method create and initialize state variables (JSON Object Key-Value pairs).

  ReactDOM.componentDidMount():
    Moment components are placed onto DOM  -->  Make API request.
    Setting state here will trigger re-rendering (called immediately / asynch).
      fetch(url) --> Request sent to the url's API
      .then() --> Callback argument for the API Response
        Step 1: convert to JSON
        Step 2: store response as/in a state array variable)
        
  ReactDOM.render():
    Class method passes HTML code inside 'root' HTML element.
*/
class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      searchInput: ''
    };
  }

  componentDidMount = () => {
    const url = ('https://jsonplaceholder.typicode.com/users');
    fetch(url)
    .then((response) => response.json())
    .then((users) => 
      this.setState(() => {
        return {user: users}; 
      })
    )
  }

  onSearchChange = (event) => {
    const searchInput = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchInput };
    });
  }

  render = () => {
    // destructuring ES6 (optimization via replacing 'this.*')
    const { user, searchInput } = this.state;
    const { onSearchChange } = this;
    const filterUsers = user.filter((user) => { 
      // returns array of users matching the user's input (search string)
      return (user.username.toLowerCase().includes(searchInput));
    });
    // returns the HTML View
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <PageTitle title={'M a d - T e a - S h o p'}/>
          </div>
        </div>
        <div className="App-header">
          <div>
            <SearchBox onChangeHandler={onSearchChange} placeholder={'search users'} searchTitle={'P r o f i l e s'}/>
          </div>
          {
            filterUsers.map((user) => {
              return (
                <div key={user.id}>
                  <UserCard user={filterUsers}/>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  };
}

export default Home;