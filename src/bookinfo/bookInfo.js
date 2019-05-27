import React from "react";
import "./bookInfo.css";

class BookInfo extends React.Component {
  render() {
    return (
      <div className="bookinfo">
        <h2 id="title">{this.props.title}</h2>
        <h4>AUTHOR: {this.props.author}</h4>
        <h4>{this.props.subtitle}</h4>
      </div>
    );
  }
}

export default BookInfo;
