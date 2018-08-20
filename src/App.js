import React from 'react'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    // A state representing the array of books fetched from BooksAPI
    books: []
  }
  // A method invoked directly after the component is mounted
  // Represents fetching books from BooksAPI and into the books array
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }
  // A function that handles switching books between different
  // shelves then re-sort the UI based on the new data
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  render() {
    return (
      <div className="app">
      {/* Path to MainPage URL */}
      <Route exact path='/' render={() => (
        <MainPage
          books={this.state.books}
          changeShelf={this.changeShelf}
        />
      )}/>
      {/* Path to SearchPage URL && using history as argument to
        keep all the Mainpage updated with changes made in the
        SearchPage */}
      <Route path='/search' render={({history}) => (
        <SearchPage
          books={this.state.books}
          changeShelf={this.changeShelf}
        />
      )}/>
      </div>
    )
  }
}

export default BooksApp;
