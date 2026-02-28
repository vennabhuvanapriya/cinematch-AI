import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Play, X } from 'lucide-react';
import { Movie } from '../data/movies';

interface MovieCardProps {
  key?: string | number;
  movie: Movie;
  onLike: (movie: Movie) => void;
  onDislike: (movie: Movie) => void;
  status: 'liked' | 'disliked' | 'none';
}

export function MovieCard({ movie, onLike, onDislike, status }: MovieCardProps) {
  const [showGlimpse, setShowGlimpse] = useState(false);

  return (
    <div className="bg-zinc-900 rounded-xl shadow-sm overflow-hidden border border-zinc-800 flex flex-col h-full transition-transform hover:scale-[1.02]">
      <div className="relative aspect-[2/3] w-full bg-zinc-800 group">
        {showGlimpse && movie.youtubeId ? (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${movie.youtubeId}?autoplay=1&start=30&end=60&controls=0&modestbranding=1&rel=0`}
              title={`${movie.title} Glimpse`}
              className="w-full h-full object-cover"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setShowGlimpse(false)}
              className="absolute top-2 right-2 bg-black/60 text-white p-1.5 rounded-full hover:bg-black/80 z-10 transition-colors"
              title="Close Glimpse"
            >
              <X className="w-4 h-4" />
            </button>
          </>
        ) : (
          <>
            <img
              src={movie.posterUrl}
              alt={movie.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-medium z-10">
              {movie.year}
            </div>
            {movie.youtubeId && (
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-0">
                <button
                  onClick={() => setShowGlimpse(true)}
                  className="bg-white/90 text-zinc-900 px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all hover:bg-white hover:scale-105"
                >
                  <Play className="w-4 h-4 fill-current" />
                  30s Glimpse
                </button>
              </div>
            )}
          </>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-sans font-semibold text-lg text-zinc-100 leading-tight mb-1">
          {movie.title}
        </h3>
        <div className="flex flex-wrap gap-1 mb-3">
          {movie.genre.map(g => (
            <span key={g} className="text-[10px] uppercase tracking-wider font-medium bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full">
              {g}
            </span>
          ))}
        </div>
        <p className="text-sm text-zinc-400 line-clamp-3 mb-4 flex-grow">
          {movie.description}
        </p>
        
        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => onLike(movie)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition-colors ${
              status === 'liked' 
                ? 'bg-emerald-900/40 text-emerald-400 border border-emerald-800/50' 
                : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 border border-zinc-700/50'
            }`}
          >
            <ThumbsUp className={`w-4 h-4 ${status === 'liked' ? 'fill-emerald-400' : ''}`} />
            <span>Like</span>
          </button>
          <button
            onClick={() => onDislike(movie)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition-colors ${
              status === 'disliked' 
                ? 'bg-red-900/40 text-red-400 border border-red-800/50' 
                : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 border border-zinc-700/50'
            }`}
          >
            <ThumbsDown className={`w-4 h-4 ${status === 'disliked' ? 'fill-red-400' : ''}`} />
            <span>Dislike</span>
          </button>
        </div>
      </div>
    </div>
  );
}
