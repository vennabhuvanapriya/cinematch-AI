export interface UpcomingMovie {
  id: string;
  title: string;
  genre: string[];
  releaseDate: string;
  description: string;
  posterUrl: string;
  region: 'Global' | 'Indian';
  youtubeId?: string;
}

export const upcomingMovies: UpcomingMovie[] = [
  {
    id: "u1",
    title: "Avatar: Fire and Ash",
    genre: ["Action", "Adventure", "Sci-Fi"],
    releaseDate: "December 2025",
    description: "The third installment of the Avatar franchise, exploring the aggressive 'Ash People' of Pandora.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAtOTE5MS00YjQ2LTliNDAtOTM3YmEwYjEzYTEyXkEyXkFqcGc@._V1_SX300.jpg",
    region: "Global",
    youtubeId: "d9MyW72ELq0"
  },
  {
    id: "u2",
    title: "The Batman Part II",
    genre: ["Action", "Crime", "Drama"],
    releaseDate: "October 2026",
    description: "The sequel to Matt Reeves' The Batman, continuing the dark and gritty story of the Caped Crusader.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjY5ZjM4ODgtY2Y5Yy00ZjI0LWFkNzEtYmE3NWM5ZTA5YjQyXkEyXkFqcGc@._V1_SX300.jpg",
    region: "Global",
    youtubeId: "mqqft2x_Aa4"
  },
  {
    id: "u3",
    title: "Pushpa 2: The Rule",
    genre: ["Action", "Crime", "Drama"],
    releaseDate: "August 2024",
    description: "The clash between Pushpa Raj and Bhanwar Singh Shekhawat continues in this highly anticipated sequel.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNGZlNTFlOWMtMzgwOS00ZTE4LWJhN2MtOTQzOTZlNDY0YjE3XkEyXkFqcGc@._V1_SX300.jpg",
    region: "Indian",
    youtubeId: "1kUK0hGgXbI"
  },
  {
    id: "u4",
    title: "Kalki 2898 AD (Part 2)",
    genre: ["Action", "Sci-Fi", "Fantasy"],
    releaseDate: "TBA 2026",
    description: "The epic continuation of the futuristic dystopian saga blending Indian mythology with science fiction.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMzE4M2FjNGEtMjQ0OC00ZTRhLWE0YjEtMGE2M2I1YzM2MzFhXkEyXkFqcGc@._V1_SX300.jpg",
    region: "Indian",
    youtubeId: "y1-w1kUGuz8"
  },
  {
    id: "u5",
    title: "Dune: Messiah",
    genre: ["Action", "Adventure", "Sci-Fi"],
    releaseDate: "December 2026",
    description: "Paul Atreides rules as Emperor, but faces a conspiracy against his reign and the consequences of his holy war.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODQ0ZWE1YjMtYWMyNi00ZWUzLWE1OWUtZjc3NDM2OGQ5N2UxXkEyXkFqcGc@._V1_SX300.jpg",
    region: "Global",
    youtubeId: "Way9Dexny3w"
  },
  {
    id: "u6",
    title: "War 2",
    genre: ["Action", "Thriller"],
    releaseDate: "August 2025",
    description: "The next chapter in the YRF Spy Universe, featuring high-octane action and a gripping espionage storyline.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQ2YjA0MzAtZGRmOS00NjRjLWI1NWYtYmExYTE4NTRhN2YxXkEyXkFqcGc@._V1_SX300.jpg",
    region: "Indian",
    youtubeId: "tQ0mzXRk-oM"
  }
];
