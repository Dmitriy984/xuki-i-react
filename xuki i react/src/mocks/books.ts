import { IBook, IReader } from './types';

export const mockBooks: IBook[] = [
  { id: '1', title: 'Война и мир', author: 'Лев Толстой', year: 1869, available: true },
  { id: '2', title: 'Преступление и наказание', author: 'Фёдор Достоевский', year: 1866, available: true },
  { id: '3', title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1967, available: true },
  { id: '4', title: 'Евгений Онегин', author: 'Александр Пушкин', year: 1833, available: false },
  { id: '5', title: 'Мёртвые души', author: 'Николай Гоголь', year: 1842, available: true },
];

export const initialReaders: IReader[] = [
  {
    id: 'r1',
    fullName: 'Иванов Иван',
    email: 'ivan@example.com',
    phone: '+7(999)123-45-67',
    registrationDate: new Date('2024-01-15'),
    activeBooks: [
      {
        bookId: '4',
        title: 'Евгений Онегин',
        author: 'Александр Пушкин',
        issuedDate: new Date('2024-02-01'),
      },
    ],
    booksHistory: [
      {
        bookId: '4',
        title: 'Евгений Онегин',
        author: 'Александр Пушкин',
        issuedDate: new Date('2024-02-01'),
      },
    ],
  },
];
