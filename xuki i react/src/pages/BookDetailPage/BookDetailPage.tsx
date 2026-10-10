import { useParams } from 'react-router-dom';
import BookDetail from '../../components/books/BookDetail/BookDetail';
import { mockBooks } from '../../mocks/books';

const BookDetailPage = () => {
  const { id } = useParams();
  const book = mockBooks.find(b => b.id === id);

  if (!book) return <div>Книга не найдена</div>;

  return <BookDetail book={book} />;
};
export default BookDetailPage;
