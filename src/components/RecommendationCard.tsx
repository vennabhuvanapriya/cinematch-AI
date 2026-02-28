import React, { useState } from 'react';
import { Recommendation } from '../services/gemini';
import { Sparkles, Play, X } from 'lucide-react';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const [showGlimpse, setShowGlimpse] = useState(false);

  return (
    <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 shadow-sm relative overflow-hidden group hover:border-indigo-500/50 transition-colors flex flex-col sm:flex-row">
      {/* Poster / Video Section */}
      <div className="w-full sm:w-1/3 relative aspect-[2/3] sm:aspect-auto sm:h-auto bg-zinc-950 flex-shrink-0">
        {showGlimpse && recommendation.youtubeId ? (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${recommendation.youtubeId}?autoplay=1&start=30&end=60&controls=0&modestbranding=1&rel=0`}
              title={`${recommendation.title} Glimpse`}
              className="w-full h-full object-cover absolute inset-0"
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
            {recommendation.posterUrl ? (
              <img
                src={recommendation.posterUrl}
                alt={recommendation.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover absolute inset-0"
              />
            ) : (
              <div className="w-full h-full absolute inset-0 flex items-center justify-center bg-zinc-800">
                <span className="text-zinc-500 font-medium">No Poster</span>
              </div>
            )}
            
            {recommendation.youtubeId && (
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

      {/* Content Section */}
      <div className="p-6 flex-grow relative">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
          <Sparkles className="w-24 h-24 text-indigo-400" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex items-baseline gap-3 mb-2">
            <h3 className="font-sans text-2xl font-bold text-zinc-100">
              {recommendation.title}
            </h3>
            <span className="text-indigo-400 font-mono text-sm font-medium">
              {recommendation.year}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {recommendation.genre.map(g => (
              <span key={g} className="text-xs font-medium uppercase tracking-wider bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-full border border-zinc-700/50">
                {g}
              </span>
            ))}
          </div>
          
          <div className="bg-zinc-950/50 rounded-xl p-4 border border-zinc-800/50 mt-auto">
            <p className="text-sm text-zinc-300 leading-relaxed">
              <span className="font-semibold block mb-1 text-indigo-400">Why you'll love it:</span>
              {recommendation.reason}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
