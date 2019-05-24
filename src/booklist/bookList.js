import React from "react";
import "./bookList.css";
import BookImage from "../bookimage/bookImage";
import BookInfo from "../bookinfo/bookInfo";

class BookList extends React.Component {
  render() {
    return (
      <div className="booklist">
        <BookImage />
        <BookInfo handleSearch={book => this.searchBook(book)} />
      </div>
    );
  }
}

export default BookList;
