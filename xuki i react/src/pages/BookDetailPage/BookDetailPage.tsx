import { useParams } from 'react-router-dom';
import { mockBooks } from '../../mocks/books';
import BookDetail from '../../components/books/BookDetail/BookDetail';
import NotFound from '../NotFound/NotFound'; 

const BookDetailPage = () => {
  const { id } = useParams();
  const book = mockBooks.find(b => b.id === id);

  if (!book) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}><h1>Книга не найдена</h1><p>Запрошенная книга не существует.</p></div>;
  }

  return <BookDetail book={book} />;
};
export default BookDetailPage;
