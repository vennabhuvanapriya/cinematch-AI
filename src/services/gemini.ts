import { GoogleGenAI, Type } from "@google/genai";
import { Movie } from "../data/movies";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

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

  const likedTitles = likedMovies.length > 0 
    ? likedMovies.map(m => `${m.title} (${m.year}) - Genres: ${m.genre.join(", ")}`).join("\n")
    : "None specified";
    
  const dislikedTitles = dislikedMovies.length > 0 
    ? dislikedMovies.map(m => `${m.title} (${m.year})`).join("\n")
    : "";
  
  const genrePreference = preferredGenres.length > 0 
    ? `\nI specifically prefer these genres: ${preferredGenres.join(", ")}.\n` 
    : "";

  const prompt = `
I am looking for movie recommendations based on my past preferences.

Movies I LIKED:
${likedTitles}

${dislikedTitles ? `Movies I DISLIKED:\n${dislikedTitles}\n` : ""}${genrePreference}

Based on these preferences, recommend 8 movies that I might enjoy. 
Do NOT recommend any of the movies I have already liked or disliked.
ONLY recommend very popular, well-known movies that are guaranteed to have official posters and trailers available on the web.
For each recommendation, provide the title, the release year, the genres, a short 1-2 sentence reason explaining why I would like it based on my preferences, and the exact 11-character YouTube video ID for its official trailer or a popular clip.
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: "The title of the recommended movie.",
              },
              year: {
                type: Type.INTEGER,
                description: "The release year of the movie.",
              },
              genre: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
                description: "The genres of the movie.",
              },
              reason: {
                type: Type.STRING,
                description: "A short explanation of why this movie is recommended based on the user's liked movies.",
              },
              youtubeId: {
                type: Type.STRING,
                description: "The exact 11-character YouTube video ID for the official trailer or a popular clip of the movie.",
              }
            },
            required: ["title", "year", "genre", "reason", "youtubeId"],
          },
        },
      },
    });

    const jsonStr = response.text?.trim() || "[]";
    const rawRecommendations = JSON.parse(jsonStr) as Recommendation[];
    
    // Fetch posters from OMDB and filter out ones without posters or youtubeIds
    const validRecommendations: Recommendation[] = [];
    
    for (const rec of rawRecommendations) {
      if (!rec.youtubeId || rec.youtubeId.length !== 11) continue;
      
      try {
        const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(rec.title)}&y=${rec.year}&apikey=b9a5e69d`);
        const data = await res.json();
        
        if (data.Poster && data.Poster !== 'N/A') {
          rec.posterUrl = data.Poster;
          validRecommendations.push(rec);
        }
      } catch (e) {
        console.error("Failed to fetch poster for", rec.title);
      }
      
      if (validRecommendations.length >= 5) {
        break; // We only need 5 valid recommendations
      }
    }

    return validRecommendations;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw new Error("Failed to get recommendations. Please try again later.");
  }
}
