//Script for open api library
import prisma from '../src/utils/prisma';

const dataFormat = {
  numFound: 11389,
  start: 0,
  numFoundExact: true,
  docs: [
    {
      author_name: ['', ''],
      cover_i: 95133,
      first_publish_year: 1968,
      title: 'Art and photography'
    },
    {
      author_name: [''],
      cover_i: 8245415,
      first_publish_year: 1900,
      title: 'The book of tea'
    }
  ],
  num_found: 11389,
  q: 'arts and photography',
  offset: null
};

type DataFormat = typeof dataFormat;

type Book = (typeof dataFormat.docs)[number];

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
  const price = prices[Math.floor(Math.random() * (prices.length + 1))];
  const rating = Math.round(Math.random() * (5 - 3) + 3);
  const {title, author_name, cover_i, first_publish_year} = data;
  return {
    title,
    authors: author_name,
    category,
    price,
    coverId: cover_i ?? 0,
    publishYear: first_publish_year,
    description: DESCRIPTION,
    rating,
    bestSelling: Math.random() > 0.5
  };
}

async function seed() {
  const requiredFields = [
    'title',
    'author_name',
    'first_publish_year',
    'cover_i'
  ];
  const BASE_URL = 'https://openlibrary.org/search.json';

  try {
    for (const [key, value] of Object.entries(genres)) {
      const query = encodeURIComponent(value);
      const response = await fetch(
        `${BASE_URL}?q=${query}&limit=10&fields=${requiredFields.join(',')}`
      );
      const data: DataFormat = await response.json();
      console.log(`Fetched data for ${key}`);
      const collection = data.docs.map(doc => {
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

seed();
