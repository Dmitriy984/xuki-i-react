import { IBook } from '../../../types/book.types';
import BookCover from '../BookCover/BookCover';
import BookInfo from '../BookInfo/BookInfo';
import BookReviews from '../BookReviews/BookReviews';

interface BookDetailProps {
  book: IBook;
}

const BookDetail = ({ book }: BookDetailProps) => {
  return (
    <div className="book-detail" style={{ display: 'flex', gap: '30px' }}>
      <BookCover cover={book.cover} />
      <div>
        <BookInfo title={book.title} author={book.author} year={book.year} genre={book.genre} description={book.description} />
        <BookReviews reviews={book.reviews} />
      </div>
    </div>
  );
};
export default BookDetail;
