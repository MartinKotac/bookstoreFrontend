
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Books from "../Books/BookList/books";
import Authors from "../Authors/authors";
import Header from "../Header/header";
import LibraryService from '../../repository/libraryRepository';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      books: [],
      authors: []
    }
  }
  render(){
    return (
      <Router>
        <main>
          <div className='container'>
            <Header/>
            <Routes>
            <Route path={"/books"} exact element={<Books books={this.state.books}/>}/>
            <Route path={"/authors"} exact element={<Authors authors={this.state.authors}/>}/>
            </Routes>
          </div>
        
        </main>
      </Router>
    );
  }

  loadBooks =() => {
    LibraryService.fetchBooks()
    .then((data) => {
      this.setState({
        books: data.data

      })
    })
  }

  loadAuthors =() => {
    LibraryService.fetchAuthors()
    .then((data) => {
      this.setState({
        authors: data.data

      })
    })
  }


  componentDidMount(){
    this.loadBooks();
    this.loadAuthors();

  }


}

export default App;
