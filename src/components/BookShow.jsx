import { useState } from 'react';
import BookEdit from './BookEdit';
const BookShow = ({book, onDelete, onEdit}) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id)
  }
  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }
  const handleSubmit = (id, newTitle, newAuthor) => {
    setShowEdit(false);
    onEdit( id, newTitle, newAuthor)
  }

  let content = <h3>{book.title}</h3>;
  let author = <p>{book.author}</p>
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />
  }

  return (
    <div className="book-show">
      <img
      alt='books'
      src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>
        {content}
        {author}
      </div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}

export default BookShow