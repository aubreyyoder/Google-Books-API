import React from "react";
import "./bookList.css";
import BookImage from "../bookimage/bookImage";
import BookInfo from "../bookinfo/bookInfo";
import { Fragment } from "react";

class BookList extends React.Component {
  render() {
    const books = this.props.books || [];
    return (
      <div className="booklist">
        {books.map((cp, index) => {
          let defautImage =
            "http://www.gstatic.com/tv/thumb/tvbanners/10399541/p10399541_b_v8_ab.jpg";
          let imagesLink =
            cp.volumeInfo.imageLinks.smallThumbnail || defautImage;
          return (
            <div key={index}>
              <BookImage image={imagesLink} />
              <BookInfo />
            </div>
          );
        })}
      </div>
    );
  }
}

export default BookList;
