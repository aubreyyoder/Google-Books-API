import React from "react";
import "./bookList.css";
import BookImage from "../bookimage/bookImage";
import BookInfo from "../bookinfo/bookInfo";

class BookList extends React.Component {
  render() {
    return (
      <div className="booklist">
        <BookImage />
        <BookInfo price={this.props.price} author={this.props.author} />
      </div>
    );
  }
}

export default BookList;
