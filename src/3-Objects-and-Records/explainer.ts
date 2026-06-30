type Base = {
  id: string;
  postedAt: Date;
}

type Article = {
  headline: string;
  content: string;
} & Base;

type Feedback = {
  username: string;
  comment: string;
} & Base;


// -------------

interface Base2 {
  id: string;
  postedAt: Date;
}

interface Article2 extends Base2 {
  headline: string;
  content: string;
}

interface Feedback2 extends Base2 {
  username: string;
  comment: string;
}


// ---------------

type BookDetails = {
  isbn: string;
  title: string;
  author: string;
}

type BookInventory = {
  isbn: number;
  availableCopies: number;
}

type Book = BookDetails & BookInventory;

// const book: Book = {
//   title: "Advanced TypeScript",
//   author: "Advanced Tutorials",
//   availableCopies: 10,
//   // isbn: "1234",
// };
