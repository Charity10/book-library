import { useState } from "react"

const BookEdit = ({book, onSubmit}) => {
  const [newtitle, setNewTitle] = useState(book.title);
  const [newAuthor, setNewAuthor] = useState(book.author);

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(book.id, newtitle, newAuthor)
  }
  const handleChange = (e) => {
    setNewTitle(e.target.value)
  }
  const handleAuthor = (e) => {
    setNewAuthor(e.target.value)
  }
  return (
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={newtitle} onChange={handleChange} type="text" />
        <input className="input" value={newAuthor} onChange={handleAuthor}/>
        <button className="button is-primary" type="submit" >Save</button>
      </form>
  )
}

export default BookEdit