import axios from '../custom-axios/axios';

const LibraryService = {
    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchAuthors: () => {
        return axios.get("/authors")
    },
    fetchCategories: () => {
        return axios.get("/books/categories")
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`)
    },
    addBook: (name, bookCategory, authorId, availableCopies) => {
        return axios.post("/books/add", {
            "name": name,
            "bookCategory": bookCategory,
            "authorId": authorId,
            "availableCopies": availableCopies
        })
    },
    editBook: (id, name, bookCategory, authorId, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name": name,
            "bookCategory": bookCategory,
            "authorId": authorId,
            "availableCopies": availableCopies
        })

    },
    getBook: (id) => {
        return axios.get(`/books/${id}`)
    },

    rentBook: (id)=>{
        return axios.post(`/books/rent/${id}`)
    }
}
 export default LibraryService;