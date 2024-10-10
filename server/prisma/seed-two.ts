import {Book, GoogleBookApiResponse} from '../@types/google';
import prisma from '../src/utils/prisma';

const genres = {
  art: 'arts and photography',
  romance: 'historical romance',
  thriller: 'thriller and suspense',
  health: 'health and wellness'
};

function transformData<T extends keyof typeof genres>(category: T, data: Book) {
  const DESCRIPTION =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const prices = [
    20.99, 22.45, 23.0, 15.2, 13.53, 31.54, 23.45, 19.9, 17.35, 21.32
  ];
  const price = prices[Math.floor(Math.random() * prices.length)];
  const rating = Math.round(Math.random() * (5 - 3) + 3);
  const {title, authors, imageLinks, publishedDate} = data.volumeInfo;
  const {description} = data.volumeInfo;
  const {smallThumbnail, thumbnail} = imageLinks;
  return {
    title,
    authors,
    category,
    price,
    thumbnail: {small: smallThumbnail, large: thumbnail},
    publishedDate,
    description: description ?? DESCRIPTION,
    rating,
    bestSelling: Math.random() > 0.5
  };
}

async function seed() {
  const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
  try {
    for (const [key, value] of Object.entries(genres)) {
      const query = encodeURIComponent(value);
      const response = await fetch(
        `${BASE_URL}?key=${GOOGLE_API_KEY}&q=${query}&maxResults=10`
      );
      const data: GoogleBookApiResponse = await response.json();
      console.log(`Fetched data for ${key}`);
      const collection = data.items.map(doc => {
        return transformData(key as keyof typeof genres, doc);
      });
      await prisma.book.createMany({data: collection});
      console.log(`Added data for ${key} to DB`);
    }
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}

// async function deleteAllBooks() {
//   await prisma.book.deleteMany();
//   console.log('Deleted successfully');
// }
// deleteAllBooks();

seed();
