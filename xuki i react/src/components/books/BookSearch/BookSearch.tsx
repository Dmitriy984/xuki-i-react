import { useState } from 'react';
import { IBook } from '../../types';

interface Props {
  availableBooks: IBook[];
  onIssue: (bookId: string) => void;
}

const BookSearch = ({ availableBooks, onIssue }: Props) => {
  const [query, setQuery] = useState('');

  const filtered = query
    ? availableBooks.filter(b => b.title.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div>
      <h3>Выдача книг</h3>
      <input
        type="text"
        placeholder="Поиск по названию..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {filtered.length > 0 && (
        <ul>
          {filtered.map(b => (
            <li key={b.id}>
              {b.title} – {b.author}
              <button onClick={() => { onIssue(b.id); setQuery(''); }}>
                Выдать
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookSearch;
