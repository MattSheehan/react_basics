import "./SearchBox.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler, searchTitle }) => {
  return (
    <div>
      <h1>{searchTitle}</h1>
      <br/>
      <div id="cover">
        <form method="get" action="">
          <div className="tb">
            <div className="td" id="s-cover">
              <button type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
            <div className="td" id="b-cover">
              <input 
                className={"input"} 
                type="search" 
                placeholder={placeholder} 
                onChange={onChangeHandler}
              />
            </div>
          </div>
        </form>
      </div>
      <br/>
    </div>
  );
}

export default SearchBox;
