import React, { useState } from 'react';
import { upcomingMovies } from '../data/upcoming';
import { Calendar, Globe2, MapPin, Play, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Upcoming() {
  const [filter, setFilter] = useState<'All' | 'Global' | 'Indian'>('All');
  const [activeGlimpse, setActiveGlimpse] = useState<string | null>(null);

  const filteredMovies = upcomingMovies.filter(
    movie => filter === 'All' || movie.region === filter
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Upcoming Releases
        </h1>
        <p className="text-lg text-zinc-400">
          Get ready for the most anticipated movies hitting theaters soon. From Hollywood blockbusters to Indian epics.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-12">
        {['All', 'Global', 'Indian'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === f
                ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]'
                : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMovies.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group hover:border-zinc-700 transition-colors"
          >
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-950">
              {activeGlimpse === movie.id && movie.youtubeId ? (
                <>
                  <iframe
                    src={`https://www.youtube.com/embed/${movie.youtubeId}?autoplay=1&start=30&end=45&controls=0&modestbranding=1&rel=0`}
                    title={`${movie.title} Glimpse`}
                    className="w-full h-full object-cover absolute inset-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setActiveGlimpse(null)}
                    className="absolute top-4 right-4 bg-black/60 text-white p-1.5 rounded-full hover:bg-black/80 z-20 transition-colors"
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
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-0" />
                  
                  <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <span className="bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5 border border-white/10">
                      {movie.region === 'Global' ? <Globe2 className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                      {movie.region}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-2 bg-indigo-950/50 w-fit px-3 py-1 rounded-full border border-indigo-500/20 backdrop-blur-sm">
                      <Calendar className="w-4 h-4" />
                      {movie.releaseDate}
                    </div>
                  </div>

                  {movie.youtubeId && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                      <button
                        onClick={() => setActiveGlimpse(movie.id)}
                        className="bg-white/90 text-zinc-900 px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all hover:bg-white hover:scale-105"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        15s Glimpse
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                {movie.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genre.map(g => (
                  <span key={g} className="text-[10px] uppercase tracking-wider font-semibold bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-full">
                    {g}
                  </span>
                ))}
              </div>
              
              <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                {movie.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
