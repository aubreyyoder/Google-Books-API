import React from "react";
import "./App.css";
import Header from "./header/header";
import BookSearch from "./booksearch/bookSearch";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <BookSearch />
      </div>
    );
  }
}

export default App;
