import React from 'react';
import { Link } from 'react-router-dom';

interface NotFoundPageProps {
  message?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ message = "Извините, запрошенная страница не существует." }) => {
  return (
    <div className="not-found-page" style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>{message}</p>
      <Link to="/" className="btn btn-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;
