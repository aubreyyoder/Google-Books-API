import React from "react";
import "./bookSearch.css";
import SearchBar from "../searchbar/searchBar";
import BookList from "../booklist/bookList";

class Booksearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: ""
    };
  }

  queryMethod(evt) {
    const { printType, search, filter } = evt;
    let baseUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
    if (printType.length > 0) {
      baseUrl = baseUrl + `&printType=${printType}`;
    }
    if (filter.length > 0) {
      baseUrl = baseUrl + `&filter=${filter}`;
    }

    fetch(baseUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong! Please try again later!");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          books: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  searchBook(data) {
    this.queryMethod(data);
  }

  render() {
    return (
      <div className="booksearch">
        <SearchBar bookSearch={book => this.searchBook(book)} />
        <BookList books={this.state.books} />
        {this.state.error ? (
          <div>
            <h2 style={{ color: "red" }}> Something wrong happened</h2>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Booksearch;
