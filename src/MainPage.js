import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf';

class MainPage extends Component {
  state={
    shelves: [
      {shelf:"Currently Reading", title:"currentlyReading"},
      {shelf:"Want to Read", title:"wantToRead"},
      {shelf:"Read", title:"read"}
    ]
  }

  render() {
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>Library</h1>
          </div>
          <div className="list-books-content">
            <div className="library-body">
              {/* First shelf component */}
              {this.state.shelves.map(myShelf => {
                return <Shelf
                shelf={myShelf.shelf}
                title={myShelf.title}
                books={this.props.books}
                changeShelf={this.props.changeShelf}
                />
              })}
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
