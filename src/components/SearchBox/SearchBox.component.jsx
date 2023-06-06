import {Component} from "react";
import "./SearchBox.styles.css";

class SearchBox extends Component {
  render() {
    // destructuring ES6 (optimization via replacing "this.props.*")
    const { className, placeholder, onChangeHandler, searchTitle } = this.props;
    return (
      <div>
        <h1>{searchTitle}</h1>
        <br/>
        <div id="cover">
          <form method="get" action="">
            <div className="tb">
              <div className="td">
                <input 
                  className={className} 
                  type="search" 
                  placeholder={placeholder} 
                  onChange={onChangeHandler}
                />
              </div>
              <div className="td" id="s-cover">
                <button type="submit">
                  <div id="s-circle"></div>
                  <span></span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <br/>
      </div>
    );
  }
}

export default SearchBox;
