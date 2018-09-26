const mockData = {
  firstName: 'jay',
  lastName: 'ying',
  books: [
    {
      title: 'bookName1',
      dates: { start: '2017-12-31'},
    },
    {
      title: 'bookName2',
      dates: { start: '2018-12-31'},
    }
  ]
}
export const Author = `
  extend type Query {
    author: Author
  }
  type Author {
    firstName: String
    lastName: String
    books: [Book]
  }
  type Book {
    title: String
    dates: Dates
  }
  type Dates {
    start: String
    end: String
  }
`;



export const authorResolvers = {
  Query: {
    author: () => ( mockData ),
  },
  Author: {
    books: () => (mockData.books),
  }
};
