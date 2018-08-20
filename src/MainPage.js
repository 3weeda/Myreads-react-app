import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';

class MainPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/* All three components are with books prop introduced
              from App.js Line:35, changeShelf prop introduced
              from App.js Line 36 */}
              {/* First shelf component */}
            <CurrentlyReading
            books={this.props.books}
            changeShelf={this.props.changeShelf}
            />
            {/* Second shelf component */}
            <WantToRead
            books={this.props.books}
            changeShelf={this.props.changeShelf}
            />
            {/* Third shelf component */}
            <Read
            books={this.props.books}
            changeShelf={this.props.changeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          {/* span to add a title on hover to the Search for a book button
              Link tag with to attribute showing path to the SearchPage*/}
          <span title="Add a new book"><Link
          to='/search'
          ></Link></span>
        </div>
      </div>
      )}
  }

  export default MainPage;
