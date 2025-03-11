export interface Content {
  id: number;
  title: string;
  originalTitle?: string;
  posterPath: string;
  backdropPath?: string;
  overview: string;
  releaseDate?: string;
  rating: number;
  genres: string[];
  type: "movie" | "tv";
}

export interface ContentDetailMovie extends Content {
  runtime: number;
  director: string;
  cast: string[];
}

export interface ContentDetailTV extends Content {
  episodes: number;
  seasons: number;
  creators: string[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}
