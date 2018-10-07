export class Book {
    isbn: string;                       // String.
    publishers: Array<Object>;          // Array --> Objects.
    identifiers: Object;                // Object - Different ids for various sources.
    classifications: Object;            // Object - Dewey Dec, lc, etc.
    title: string;                      // Book title.
    number_of_pages: number;            // Number
    cover: Object;                      // Object - (small, medium, large) Image links of cover.
    subject_places: Array<Object>;      // Array --> Objects.
    subjects: Array<Object>;            // Array --> Objects.
    publish_date: string;               // String.
    key: string;                        // string - Open Library Key.
    authors: Array<Object>;             // Array --> Object.
  }