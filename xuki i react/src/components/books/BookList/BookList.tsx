import { IBook } from '../../../types/book.types';
import BookCard from '../BookCard/BookCard';

interface BookListProps {
  books: IBook[];
}

const BookList = ({ books }: BookListProps) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
