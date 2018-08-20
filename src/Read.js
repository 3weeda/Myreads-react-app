import React, { Component } from 'react';
import Book from './Book';

class Read extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* Calling the books array property and filtering it only
            the Read books and drawing the UI of the list items */}
            {this.props.books.filter(book => book.shelf === 'read')
             .map(book => (
               <li key={book.id}>
                 <Book
                 book={book}
                 changeShelf={this.props.changeShelf}
                 currentShelf="read"
                 />
               </li>))
            }
          </ol>
        </div>
      </div>
)}
}

export default Read;
