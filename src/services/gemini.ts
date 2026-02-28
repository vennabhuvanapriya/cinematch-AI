import { Movie } from "../data/movies";

export interface Recommendation {
  title: string;
  year: number;
  genre: string[];
  reason: string;
  youtubeId?: string;
  posterUrl?: string;
}

export async function getRecommendations(
  likedMovies: Movie[], 
  dislikedMovies: Movie[],
  preferredGenres: string[] = []
): Promise<Recommendation[]> {
  if (likedMovies.length === 0 && preferredGenres.length === 0) {
    return [];
  }

  try {
    const response = await fetch('/api/recommend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        likedMovies,
        dislikedMovies,
        preferredGenres
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "Failed to get recommendations");
    }

    return await response.json() as Recommendation[];
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw new Error("Failed to get recommendations. Please try again later.");
  }
}
