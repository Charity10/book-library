import { useState } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"  

const App = () => {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return{ ...book, title: newTitle};
      }
      return book;
    })
    setBooks(updatedBooks);
  }
  
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id)
    setBooks(updatedBooks)
  }
  const createBook = (title) => {
    const  updatedBooks = [
      ...books,
      {id: Math.round(Math.random()*9999), title}
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