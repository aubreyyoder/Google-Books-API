import React from "react";
import "./bookImage.css";

class BookImage extends React.Component {
  render() {
    return (
      <div className="bookImage">
        <img
          src={this.props.image}
          alt={this.props.altImage}
          onClick={<h4>{this.props.bookInfo}</h4>}
        />
      </div>
    );
  }
}

export default BookImage;
