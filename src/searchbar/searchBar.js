import React from "react";
import "./searchBar.css";
import FeatureBar from "../featurebar/featureBar";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar">
        <form className="bookSearchForm">
          <label htmlFor="search">Search:</label>
          <input type="text" name="search" id="search" placeholder="keyword" />
          <button type="submit">Search</button>
          <FeatureBar />
        </form>
      </div>
    );
  }
}

export default SearchBar;
