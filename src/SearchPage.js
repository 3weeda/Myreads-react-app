import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import  Book from './Book'


class SearchPage extends Component {
  state = {
    // A state representing the constantly changing value of the user input
    query: '',
    // A state representing the array of books searched for in BooksAPI
    searchResultBooks: []
  }
  // A function that handles updating the value of the search query
  // to match the user input
  updateQuery = (query) => {
    this.setState({ query: query })
    this.updateSearchedBooks(query)
  }
  // A function that handles fetching the books matched with the user's
  // search input from BooksAPI
  updateSearchedBooks = (query) => {
    if(query) {
      BooksAPI.search(query).then((searchResultBooks) => {
        if(searchResultBooks.error) {
          // in case of inputing a book that's not in the API
          // or Typos, provide an empty array to escape the error
          this.setState({ searchResultBooks: [] });
        } else {
          this.setState({searchResultBooks: searchResultBooks});
        }
      })
    } else {
      // in case there's no search input, the searchResultBooks
      // array remains empty
      this.setState({ searchResultBooks: [] });
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
          to='/'
          className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            // Call the updateQuery function when the input value changes
            onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* A condition controls the state of the book in the
              SearchPage, either it's shelf if it's already in my
              collection, or None if not */}
            {/* I tried for hours to find a solution for this other than
              the one in the study jam but couldn't, any advice? */}
            {this.state.searchResultBooks.map(searchResultBook => {
              let noneShelf = "none"
              this.props.books.map((book) => (
                book.id !== searchResultBook.id ?
                noneShelf = book.shelf : ''
              ))
              return (
                //Draw the UI of the searchResultBooks array
                <li key={searchResultBook.id}>
                  <Book
                    book={searchResultBook}
                    changeShelf={this.props.changeShelf}
                    currentShelf={noneShelf}
                  />
                </li>
            )})}
          </ol>
        </div>
      </div>

    );
  }
}

export default SearchPage;
