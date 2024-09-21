import { useState } from "react"
const BookCreate = ({onCreate}) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleAuthor = (e) => {
    setAuthor(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onCreate(title, author);
    setTitle('')
    setAuthor('')
  }

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" placeholder="Title" value={title} onChange={handleChange} />
        <input className="input" type="text" placeholder="Author" value={author} onChange={handleAuthor} />
        <button className="button" type="submit">Create</button>                             
      </form>
    </div>
  )
}

export default BookCreate