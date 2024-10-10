const response = {
  kind: 'books#volumes',
  totalItems: 6051,
  items: [
    {
      kind: 'books#volume',
      id: 'M9UOzgEACAAJ',
      etag: 'azIRkm1g/TA',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/M9UOzgEACAAJ',
      volumeInfo: {
        title: 'The Art of Romance',
        subtitle:
          'Discover the Role of Romance in Intimacy, Marriage, Love, Closeness and Learn Step by Step How to Maintain the Romance Alive Trough Ideas, Gestures and Games',
        authors: ['Glory Chapman'],
        publishedDate: '2020-11-22',
        description:
          "Where's the romance? ❤❤❤❤❤You want love, but you don't want pain. You want the person you desire to see you as romantic, but how do you DO romance beyond the standard red roses and chocolates? First impressions count, but looks can be deceiving. Let's face it, we notice someone's physical characteristics first, but 'pretty is as pretty does.' Everything else about the person will determine whether you're compatible. These are clichés because they are true, so how do you increase your chances of happiness rather than heartache through dating and romantic partnership? Are you clueless about what happened when someone who interests you suddenly ghosts you? The Art of Romance can help you navigate the mysteries of romance if you want to find the partner who will make you both happy. The book covers: The 10 biggest misconceptions about romance The role of romance in intimacy, marriage, love, closeness, and sex Specific methods to nurture romantic love Setting the mood for romance Romance at the dinner table Tips for keeping the romance in long-distance relationships How to romance a man How to romance a woman Nurturing romance after your wedding vows How romance in marriage is different from dating romance Romantic indoor dates Romantic games for couples How to rekindle romance Much more! If you are ready to step up your romantic game, you've come to the right place. Stop spending your weekends alone licking the wounds of bad love or rejection. Stop wondering why you and your partner aren't closer. Learn how to DO romance! Your heart will thank you. ❤❤❤❤❤",
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '1801142408'
          },
          {
            type: 'ISBN_13',
            identifier: '9781801142403'
          }
        ],
        readingModes: {
          text: false,
          image: false
        },
        pageCount: 160,
        printType: 'BOOK',
        categories: ['Family & Relationships'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=M9UOzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=M9UOzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        language: 'en',
        previewLink:
          'http://books.google.com/books?id=M9UOzgEACAAJ&dq=romance&hl=&cd=1&source=gbs_api',
        infoLink:
          'http://books.google.com/books?id=M9UOzgEACAAJ&dq=romance&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/The_Art_of_Romance.html?hl=&id=M9UOzgEACAAJ'
      },
      saleInfo: {
        country: 'NG',
        saleability: 'NOT_FOR_SALE',
        isEbook: false
      },
      accessInfo: {
        country: 'NG',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false
        },
        pdf: {
          isAvailable: false
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=M9UOzgEACAAJ&hl=&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          '&#39; Everything else about the person will determine whether you&#39;re compatible. These are clichés because they are true, so how do you increase your chances of happiness rather than heartache through dating and romantic partnership?'
      }
    }
  ]
};

export type GoogleBookApiResponse = typeof response;
export type Book = (typeof response.items)[number];
