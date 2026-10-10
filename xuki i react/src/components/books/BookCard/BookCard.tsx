import { useNavigate } from 'react-router-dom';
import { IBook } from '../../../types/book.types';

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/books/${book.id}`);
  };

  return (
    <div className="book-card" onClick={handleClick} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '15px', marginBottom: '15px' }}>
      <h3>{book.title}</h3>
      <p><strong>Автор:</strong> {book.author}</p>
      <p><strong>Год:</strong> {book.year}</p>
      <p><strong>Жанр:</strong> {book.genre}</p>
      <button onClick={handleClick}>Подробнее</button>
    </div>
  );
};
export default BookCard;
