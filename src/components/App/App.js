
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Books from "../Books/BookList/books";
import Authors from "../Authors/authors";
import Header from "../Header/header";
import BookAdd from "../Books/BookAdd/bookAdd";
import BookEdit from "../Books/BookEdit/bookEdit";
import LibraryService from '../../repository/libraryRepository';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      books: [],
      authors: [],
      categories: [],
      selectedBook: {}
    }
  }
  render(){
    return (
      <Router>
        <main>
          <div className='container'>
            <Header/>
            <Routes>
              <Route path={"books/add"} exact element={<BookAdd authors={this.state.authors}
                                                                categories={this.state.categories}
                                                                onAddBook={this.addBook}/>}/>
              <Route path={"/books/edit/:id"} exact element={<BookEdit authors={this.state.authors}
                                                                       categories={this.state.categories}
                                                                       book={this.state.selectedBook}
                                                                       onEditBook={this.editBook}/>}/>
            <Route path={"/books"} exact element={<Books books={this.state.books}
                                                         onDelete={this.deleteBook}
                                                         onRent={this.rentBook}
            onEdit={this.getBook}/>}/>
            <Route path={"/authors"} exact element={<Authors authors={this.state.authors} />}/>
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
  loadCategories =() =>{
    LibraryService.fetchCategories()
        .then((data) => {
          this.setState({
            categories:data.data
          })
        })
  }

  deleteBook =(id)=>{
    LibraryService.deleteBook(id)
        .then(()=>{
          this.loadBooks();
        })
  }
  rentBook = (id) =>{
    LibraryService.rentBook(id)
        .then(()=>{
          this.loadBooks();
        })
  }

  addBook = (name,bookCategory,authorId,availableCopies) =>{
    LibraryService.addBook(name,bookCategory,authorId,availableCopies)
        .then(()=>{
          this.loadBooks();
        })
  }
  getBook = (id) => {
    LibraryService.getBook(id)
        .then((data) => {
          this.setState({
            selectedBook: data.data
          })
        })
  }

  editBook = (id, name, category, author, availableCopies) => {
    LibraryService.editBook(id, name, category, author, availableCopies)
        .then(() => {
          this.loadBooks();
        })
  }


  componentDidMount(){
    this.loadBooks();
    this.loadAuthors();
    this.loadCategories();

  }


}

export default App;
