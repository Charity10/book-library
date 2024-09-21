import { useEffect, useState } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"  
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);
  

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
    console.log(response.data)
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = async (id, newTitle, newAuthor) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {title: newTitle, author: newAuthor});
    console.log(response);

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return{ ...book, ...response.data};
      }
      return book;
    })
    setBooks(updatedBooks);
  }
  
  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => book.id !== id)
    setBooks(updatedBooks)
  }
 
  const createBook = async (title, author) => {
   const response = await axios.post('http://localhost:3001/books', {title, author});
    
    const  updatedBooks = [
      ...books,
      response.data
    ]
    setBooks(updatedBooks)
  }
  return (
    <div className="app">
      <h1>Books I&apos;ve read in 2024</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App