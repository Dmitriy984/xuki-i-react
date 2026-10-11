import { IActiveBook } from '../../types';

interface Props {
  activeBooks: IActiveBook[];
  onReturn: (bookId: string) => void;
}

const ActiveBooksSection = ({ activeBooks, onReturn }: Props) => (
  <div>
    <h3>Активные книги</h3>
    {activeBooks.length === 0
      ? <p>Нет книг на руках</p>
      : <ul>
          {activeBooks.map(b => (
            <li key={b.bookId}>
              {b.title} – {b.author} (выдана: {b.issuedDate.toLocaleDateString()})
              <button onClick={() => onReturn(b.bookId)}>Вернуть</button>
            </li>
          ))}
        </ul>
    }
  </div>
);

export default ActiveBooksSection;
