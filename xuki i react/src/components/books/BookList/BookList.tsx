import { mockBooks } from '../../../mocks/books';
import BookCard from '../BookCard/BookCard';

const BookList = () => {
  return (
    <div className="book-list">
      {mockBooks.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};
export default BookList;
