export interface IReview {
  id: string;
  readerName: string;
  rating: number;
  comment: string;
}

export interface IBook {
  id: string;
  title: string;
  author: string;
  year: number;
  cover: string; 
  genre: string;
  description: string;
  reviews: IReview[];
}
