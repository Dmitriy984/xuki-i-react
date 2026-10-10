import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const mockBooks = [
  { id: '1', title: 'Преступление и наказание', author: 'Ф. Достоевский', desc: 'Классический роман.' },
  { id: '2', title: '1984', author: 'Дж. Оруэлл', desc: 'Роман-антиутопия.' }
];

const BookDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const navigate = useNavigate();

  // Поиск книги по ID
  const book = mockBooks.find(b => b.id === id);

  if (!book) {
    return <NotFoundPage message={`Книга с ID "${id}" не найдена в нашей базе данных.`} />;
  }

  return (
    <div className="book-detail">
      <button onClick={() => navigate(-1)} style={{ marginBottom: '1rem' }}>
        &larr; Назад
      </button>
      <h1>{book.title}</h1>
      <h3>Автор: {book.author}</h3>
      <p>{book.desc}</p>
    </div>
  );
};

export default BookDetailPage;
