import React from "react";
import "./featureBar.css";

class FeatureBar extends React.Component {
  render() {
    return (
      <div className="featurebar">
        <label htmlFor="print-type">Print Type:</label>
        <select id="print-type">
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <label htmlFor="book-type">Book Type:</label>
        <select id="book-type">
          <option value="no-filter">No Filter</option>
          <option value="partial">Partial</option>
          <option value="full">Full</option>
          <option value="ebooks">E-books</option>
          <option value="free-ebooks">Free E-books</option>
          <option value="paid-ebooks">Paid E-books</option>
        </select>
      </div>
    );
  }
}

export default FeatureBar;
