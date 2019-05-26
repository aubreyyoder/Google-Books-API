import React from "react";
import "./searchBar.css";
import FeatureBar from "../featurebar/featureBar";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      printType: "",
      filter: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.featureBarHandler = this.featureBarHandler.bind(this);
  }

  handleSearch(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  onSubmit(evt) {
    evt.preventDefault();
    this.props.bookSearch({ ...this.state });
  }

  featureBarHandler(evt) {
    this.setState({ ...evt });
  }

  render() {
    const disable = this.state.search.length > 0 && this.state.search;

    return (
      <div className="searchbar">
        <form className="bookSearchForm">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            name="search"
            onChange={this.handleSearch}
            placeholder="keyword"
            value={this.state.search}
          />
          <button disabled={!disable} onClick={this.onSubmit} type="submit">
            Search
          </button>
          <FeatureBar featureBarHandler={this.featureBarHandler} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
