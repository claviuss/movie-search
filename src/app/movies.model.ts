export interface SearchDTO {
  title: string;
  type?: string;
}

export interface MovieRating {
  Source: string;
  Value: string;
}
export interface Movie {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: MovieRating[];
  Released: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  Response: string
}

export type MovieCard = Pick<Movie, "Poster" | "Title" | "Type" | "Year" | "imdbID">;
