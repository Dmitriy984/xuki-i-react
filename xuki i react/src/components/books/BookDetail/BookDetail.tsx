import BookCover from '../BookCover/BookCover';
import BookInfo from '../BookInfo/BookInfo';
import BookReviews from '../BookReviews/BookReviews';
import { IBook } from '../../../types/book.types';

interface BookDetailProps { book: IBook; }

const BookDetail = ({ book }: BookDetailProps) => (
  <div className="book-detail">
    <BookCover cover={book.cover} />
    <BookInfo title={book.title} author={book.author} year={book.year} />
    <BookReviews reviews={book.reviews} />
  </div>
);
export default BookDetail;
