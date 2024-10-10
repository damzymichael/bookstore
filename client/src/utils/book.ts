import {CartItemType, Book} from '@/types';

export function getTotalPrice(items: CartItemType[]) {
  return items.reduce((acc, curr) => acc + curr.book.price * curr.quantity, 0);
}

export const searchParams = ['Title', 'Author', 'Genre'] as const;

export type SearchParam = (typeof searchParams)[number];

export const filterText = (books: Book[], param: SearchParam, text: string) => {
  const searchParam = param.toLowerCase();
  switch (searchParam) {
    case 'title':
      return books.filter(book =>
        book.title.toLowerCase().includes(text.trim().toLowerCase())
      );
    case 'author':
      return books.filter(book =>
        book.authors[0].toLowerCase().includes(text.trim().toLowerCase())
      );
    case 'genre':
      return books.filter(book =>
        book.category.includes(text.trim().toLowerCase())
      );
  }
};
