import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import BookDetailPage from './pages/BookDetailPage/BookDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const HomePage = () => <h1>Главная страница библиотеки</h1>;
const BooksPage = () => (
  <div>
    <h1>Каталог книг</h1>
    <p>Выберите книгу для просмотра деталей:</p>
    <ul>
      <li><a href="/books/1">Преступление и наказание (ID: 1)</a></li>
      <li><a href="/books/2">1984 (ID: 2)</a></li>
      <li><a href="/books/999">Несуществующая книга (Проверка 404)</a></li>
    </ul>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        
        <Route path="books" element={<BooksPage />} />
        
        <Route path="books/:id" element={<BookDetailPage />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
