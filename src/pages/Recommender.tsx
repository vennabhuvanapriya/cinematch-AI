import React, { useState } from 'react';
import { initialMovies, Movie } from '../data/movies';
import { MovieCard } from '../components/MovieCard';
import { RecommendationCard } from '../components/RecommendationCard';
import { getRecommendations, Recommendation } from '../services/gemini';
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Recommender() {
  const [likedMovies, setLikedMovies] = useState<Movie[]>([]);
  const [dislikedMovies, setDislikedMovies] = useState<Movie[]>([]);
  const [preferredGenres, setPreferredGenres] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const AVAILABLE_GENRES = [
    "Action", "Adventure", "Animation", "Comedy", "Crime", 
    "Drama", "Fantasy", "Horror", "Romance", "Sci-Fi", "Thriller"
  ];

  const toggleGenre = (genre: string) => {
    setPreferredGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const handleLike = (movie: Movie) => {
    setLikedMovies(prev => {
      if (prev.find(m => m.id === movie.id)) {
        return prev.filter(m => m.id !== movie.id);
      }
      return [...prev, movie];
    });
    setDislikedMovies(prev => prev.filter(m => m.id !== movie.id));
  };

  const handleDislike = (movie: Movie) => {
    setDislikedMovies(prev => {
      if (prev.find(m => m.id === movie.id)) {
        return prev.filter(m => m.id !== movie.id);
      }
      return [...prev, movie];
    });
    setLikedMovies(prev => prev.filter(m => m.id !== movie.id));
  };

  const getStatus = (movie: Movie) => {
    if (likedMovies.find(m => m.id === movie.id)) return 'liked';
    if (dislikedMovies.find(m => m.id === movie.id)) return 'disliked';
    return 'none';
  };

  const fetchRecommendations = async () => {
    if (likedMovies.length === 0 && preferredGenres.length === 0) {
      setError("Please like at least one movie or select a genre to get recommendations.");
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const recs = await getRecommendations(likedMovies, dislikedMovies, preferredGenres);
      setRecommendations(recs);
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching recommendations.");
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setLikedMovies([]);
    setDislikedMovies([]);
    setPreferredGenres([]);
    setRecommendations([]);
    setError(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-4">
            Discover your next favorite movie
          </h2>
          <p className="text-lg text-zinc-400">
            Tell us what you like and dislike from the list below, and our AI will recommend 5 movies tailored just for you.
          </p>
        </div>
        
        <div className="flex items-center gap-4 bg-zinc-900 p-2 rounded-xl border border-zinc-800">
          <div className="text-sm font-medium text-zinc-400 hidden sm:block px-2">
            <span className="text-emerald-500">{likedMovies.length} liked</span>
            <span className="mx-2">•</span>
            <span className="text-red-500">{dislikedMovies.length} disliked</span>
          </div>
          
          <button
            onClick={reset}
            className="p-2 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 rounded-lg transition-colors"
            title="Reset preferences"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mb-10 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50">
        <h3 className="text-lg font-semibold text-zinc-200 mb-4">
          Any specific genres you're in the mood for? <span className="text-zinc-500 font-normal text-sm ml-2">(Optional)</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_GENRES.map(genre => (
            <button
              key={genre}
              onClick={() => toggleGenre(genre)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                preferredGenres.includes(genre)
                  ? 'bg-indigo-600 text-white border border-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.3)]'
                  : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {initialMovies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onLike={handleLike}
            onDislike={handleDislike}
            status={getStatus(movie)}
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center py-12 border-t border-zinc-800">
        <button
          onClick={fetchRecommendations}
          disabled={isLoading || (likedMovies.length === 0 && preferredGenres.length === 0)}
          className={`
            relative group flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold transition-all
            ${(likedMovies.length === 0 && preferredGenres.length === 0)
              ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
              : 'bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:-translate-y-0.5 active:translate-y-0'}
          `}
        >
          {isLoading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <Sparkles className="w-6 h-6" />
          )}
          <span>{isLoading ? 'Analyzing preferences...' : 'Get AI Recommendations'}</span>
        </button>
        
        {error && (
          <p className="mt-4 text-red-400 font-medium bg-red-950/50 px-4 py-2 rounded-lg border border-red-900/50">
            {error}
          </p>
        )}
      </div>

      <AnimatePresence>
        {recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-8 pb-24"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px bg-zinc-800 flex-grow"></div>
              <h2 className="text-2xl font-bold text-zinc-100 px-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-indigo-500" />
                Your Top Matches
              </h2>
              <div className="h-px bg-zinc-800 flex-grow"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <RecommendationCard recommendation={rec} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
