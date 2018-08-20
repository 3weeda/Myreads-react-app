import React, { Component } from 'react';


class Book extends Component {
  render() {
    /*To avoid an error of displaying a book not having a thumbnail*/
    let bookThumbnail = this.props.book.imageLinks ?
    this.props.book.imageLinks.thumbnail : '';
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193,
          backgroundImage: `url("${bookThumbnail}")`}}></div>
          <div className="book-shelf-changer">
            {/*The essence of the changeShelf function by changing the
            value of the select menu from the old to the new shelf*/}
            <select onChange={(event) => this.props.changeShelf(
              this.props.book, event.target.value)}
              value={this.props.currentShelf}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        {/*Using book properties for title and authors*/}
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default Book;
