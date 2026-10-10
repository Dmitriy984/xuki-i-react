import { IBook } from '../types/book.types';

export const mockBooks: IBook[] = [
  {
    id: '1',
    title: 'Война и мир',
    author: 'Лев Толстой',
    year: 1869,
    cover: '/covers/war_and_peace.jpg',
    genre: 'Роман',
    description: 'Классическое произведение русской литературы...',
    reviews: [
      { id: 'r1', readerName: 'Иван', rating: 5, comment: 'Шедевр!' },
      { id: 'r2', readerName: 'Мария', rating: 4, comment: 'Долго, но интересно.' }
    ]
  },
  {
    id: '2',
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    year: 1966,
    cover: '/covers/master_and_margarita.jpg',
    genre: 'Роман',
    description: 'Мистический роман...',
    reviews: []
  },
  {
    id: '3',
    title: '1984',
    author: 'Джордж Оруэлл',
    year: 1949,
    cover: '/covers/1984.jpg',
    genre: 'Антиутопия',
    description: 'Роман-предупреждение...',
    reviews: [
      { id: 'r3', readerName: 'Алексей', rating: 5, comment: 'Актуально до сих пор.' }
    ]
  }
];
