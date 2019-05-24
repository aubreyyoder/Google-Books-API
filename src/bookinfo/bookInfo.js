import React from "react";
import "./bookInfo.css";

class BookInfo extends React.Component {
  render() {
    return (
      <div className="bookinfo">
        <h2 id="title">Henry I</h2>
        <h4>AUTHOR: {this.props.author} </h4>
        <h4>PRICE: {this.props.price}</h4>
      </div>
    );
  }
}

export default BookInfo;
