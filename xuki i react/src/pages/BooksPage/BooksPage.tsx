import { useState } from 'react';
import BookList from '../../components/books/BookList/BookList';
import AddBookModal from '../../components/books/AddBookModal/AddBookModal';
import { IBook } from '../../types/book.types';
import { mockBooks } from '../../mocks/books';
import styles from './BooksPage.module.css';

const BooksPage = () => {
  const [books, setBooks] = useState<IBook[]>([...mockBooks]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBook = (newBook: IBook) => {
    setBooks((prev) => [...prev, newBook]);
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1>Каталог книг</h1>
        <button
          className={styles.addButton}
          onClick={() => setIsModalOpen(true)}
        >
          + Добавить книгу
        </button>
      </div>

      <BookList books={books} />

      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddBook={handleAddBook}
      />
    </div>
  );
};

export default BooksPage;
