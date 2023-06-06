import {Component} from "react";
import "./PageTitle.styles.css";
import logo from "../../images/logo.svg";

class PageTitle extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <a className="PageTitle-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <h1>{ title }</h1>
        </a>
        <br/>
        <div>
          <img className="PageTitle-logo" src={logo} alt={"react-img"}/>
        </div>
      </div>
    );
  };
}

export default PageTitle;