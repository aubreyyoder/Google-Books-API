import React from "react";
import "./bookImage.css";
import { Fragment } from "react";

class BookImage extends React.Component {
  render() {
    return (
      <Fragment>
        <img src={this.props.image} />
      </Fragment>
    );
  }
}

export default BookImage;
