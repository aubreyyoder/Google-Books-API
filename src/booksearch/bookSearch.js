import React from "react";
import "./bookSearch.css";
import SearchBar from "../searchbar/searchBar";
import FeatureBar from "../featurebar/featureBar";
import BookList from "../booklist/bookList";
import { tsConstructorType } from "@babel/types";

class Booksearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "C. Warren Hollister",
      price: "$50.00"
    };
  }
  render() {
    return (
      <div className="booksearch">
        <SearchBar />
        <BookList price={this.state.price} author={this.state.author} />
      </div>
    );
  }
}

export default Booksearch;
