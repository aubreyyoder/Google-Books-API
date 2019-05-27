import React from "react";
import "./bookList.css";
import BookImage from "../bookimage/bookImage";
import BookInfo from "../bookinfo/bookInfo";
import AdditionalInfo from "../additionalInfo/additionalInfo";

class BookList extends React.Component {
  handlePhotoClick() {
    return (
      <AdditionalInfo description={this.props.books.volumeInfo.description} />
    );
  }
  render() {
    const books = this.props.books || [];
    return (
      <div className="booklist">
        {books.map((cp, index) => {
          const bookTitle = cp.volumeInfo.title;
          const defaultImage =
            "http://www.gstatic.com/tv/thumb/tvbanners/10399541/p10399541_b_v8_ab.jpg";
          const imagesLink =
            cp.volumeInfo.imageLinks.smallThumbnail || defaultImage;
          const authorInfo = cp.volumeInfo.authors;
          const altImage = cp.volumeInfo.printType;
          const subtitle = cp.volumeInfo.subtitle;
          const info = cp.volumeInfo.description;
          return (
            <div key={index}>
              <BookImage
                title={bookTitle}
                image={imagesLink}
                altImage={altImage}
                bookInfo={info}
                onClick={this.handlePhotoClick}
              />
              <BookInfo author={authorInfo} description={subtitle} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default BookList;
