import React from "react";
import "./featureBar.css";

class FeatureBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.props.featureBarHandler({ [name]: value });
  }

  render() {
    return (
      <div className="featurebar">
        <label htmlFor="print-type">Print Type:</label>
        <select name="printType" id="print-type" onChange={this.handleChange}>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <label htmlFor="book-type">Book Type:</label>
        <select name="filter" id="book-type" onChange={this.handleChange}>
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
