import React, { Component } from 'react';
import Book from './Book';

// I tried a lot to make only one shelf component and
// iterate over the few minor differences in names
// between them but couldn't do it, any advice, please?
class Shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title"><div className="title-child">{this.props.shelf}</div></h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* Calling the books array property and filtering it only
            the Currently reading books and drawing the UI of the list items */}
            {this.props.books.filter(book => book.shelf === this.props.title)
             .map(book => (
               <li key={book.id}>
                 <Book
                 book={book}
                 changeShelf={this.props.changeShelf}
                 currentShelf={this.props.title}
                 />
               </li>))
            }
          </ol>
        </div>
      </div>
)}
}

export default Shelf;
