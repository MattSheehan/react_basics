import "./PageTitle.styles.css";
import logo from "../../images/logo.svg";

const PageTitle = ({ title }) => {
  return (
    <div>
      <a className="PageTitle-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <h1>{ title }</h1>
        <br/>
      </a>
      <div>
        <img className="PageTitle-logo" src={logo} alt={"react-img"}/>
      </div>
    </div>
  );
}

export default PageTitle;