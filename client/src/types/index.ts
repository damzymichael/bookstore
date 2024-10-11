export type BookType = {
  id: string;
  title: string;
  authors: string[];
  category: string;
  price: number;
  publishedDate: string;
  description: string;
  rating: number;
  bestSelling: boolean;
  createdAt: Date;
  updatedAt: Date;
  thumbnail: {
    small: string;
    large: string;
  };
};

export type CartItemType = {
  book: {
    id: string;
    title: string;
    authors: string[];
    price: number;
    thumbnail: {
      small: string;
    };
  };
} & {
  id: string;
  cartId: string;
  bookId: string;
  quantity: number;
};

export type Book = {
  id: string;
  title: string;
  authors: string[];
  category: string;
};

export type User = {email: string; id: string; phoneNumber: string};
