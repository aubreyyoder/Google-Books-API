import React from "react";
import "./bookInfo.css";

class BookInfo extends React.Component {
  render() {
    return (
      <div className="bookinfo">
        <h2 id="title">{this.props.items}</h2>
        <h4>AUTHOR: </h4>
        <h4>PRICE: </h4>
      </div>
    );
  }
}

export default BookInfo;
