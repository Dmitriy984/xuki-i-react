import { useState } from 'react';
import { IBook, IReader } from '../../types';
import { mockBooks, initialReaders } from '../../mocks';
import BookSearch from './BookSearch';
import ActiveBooksSection from './ActiveBooksSection';
import ConfirmModal from './ConfirmModal';

const ProfilePage = ({ readerId }: { readerId: string }) => {
  const [books, setBooks] = useState<IBook[]>(mockBooks);
  const [readers, setReaders] = useState<IReader[]>(initialReaders);
  const [showConfirm, setShowConfirm] = useState(false);
  const [returnBookId, setReturnBookId] = useState<string | null>(null);


  const reader = readers.find(r => r.id === readerId);
  if (!reader) return <p>Читатель не найден</p>;


  const availableBooks = books.filter(b => b.available);

  
  const handleIssue = (bookId: string) => {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    const newActive = { bookId, title: book.title, author: book.author, issuedDate: new Date() };
    const newHistory = { bookId, title: book.title, author: book.author, issuedDate: new Date() };

    setReaders(readers.map(r =>
      r.id === readerId
        ? { ...r, activeBooks: [...r.activeBooks, newActive], booksHistory: [...r.booksHistory, newHistory] }
        : r
    ));
    setBooks(books.map(b => b.id === bookId ? { ...b, available: false } : b));
  };

  const handleRequestReturn = (bookId: string) => {
    setReturnBookId(bookId);
    setShowConfirm(true);
  };

  const handleConfirmReturn = () => {
    if (!returnBookId) return;
    const now = new Date();

    setReaders(readers.map(r =>
      r.id === readerId
        ? {
            ...r,
            activeBooks: r.activeBooks.filter(ab => ab.bookId !== returnBookId),
            booksHistory: r.booksHistory.map(entry =>
              entry.bookId === returnBookId && !entry.returnedDate
                ? { ...entry, returnedDate: now }
                : entry
            ),
          }
        : r
    ));
    setBooks(books.map(b => b.id === returnBookId ? { ...b, available: true } : b));
    setShowConfirm(false);
    setReturnBookId(null);
  };

  const handleCancelReturn = () => {
    setShowConfirm(false);
    setReturnBookId(null);
  };

  return (
    <div>
      <h1>Профиль: {reader.fullName}</h1>
      <BookSearch availableBooks={availableBooks} onIssue={handleIssue} />
      <ActiveBooksSection activeBooks={reader.activeBooks} onReturn={handleRequestReturn} />
      <ConfirmModal isOpen={showConfirm} onConfirm={handleConfirmReturn} onCancel={handleCancelReturn} />
    </div>
  );
};

export default ProfilePage;
