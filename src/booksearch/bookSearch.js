import React from "react";
import "./bookSearch.css";
import SearchBar from "../searchbar/searchBar";
import BookList from "../booklist/bookList";

class Booksearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    const url = "https://www.googleapis.com/books/v1/volumes";
    const options = {
      method: "GET",
      headers: {
        q: "",
        filter: "",
        printType: "",
        key: "AIzaSyDFVzV17KZPMnzwTAt8ftgH_DUlWoKtIv8"
      }
    };
    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong! Please try again later!");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          book: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  searchBook(book) {
    this.setState({
      books: [...this.state.books, book]
    });
  }
  render() {
    return (
      <div className="booksearch">
        <SearchBar />
        <BookList handleSearch={book => this.searchBook(book)} />
      </div>
    );
  }
}

export default Booksearch;
