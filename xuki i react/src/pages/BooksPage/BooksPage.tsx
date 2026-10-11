import { useState } from 'react';
import Layout from '../components/common/Layout';
import AddBookModal from '../components/books/AddBookModal/AddBookModal';

interface Book {
  title: string;
  author: string;
  year: string;
}

const BooksPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>([]); 

  const handleSaveBook = (book: Book) => {
 
  };

  return (
    <Layout>
      <div className="page-header">
        <h1 className="page-title">Каталог книг</h1>
        <button
          className="btn btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          Добавить книгу
        </button>
      </div>

      <div className="books-list">
        {books.map((book, index) => (
          <div key={index} className="book-item">
            <strong>{book.title}</strong> – {book.author} ({book.year})
          </div>
        ))}
      </div>

      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveBook}
      />
    </Layout>
  );
};

export default BooksPage;
