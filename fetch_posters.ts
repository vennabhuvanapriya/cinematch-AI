import fs from 'fs';

const movies = [
  "PK",
  "Sholay",
  "Dilwale Dulhania Le Jayenge",
  "Swades",
  "Gangs of Wasseypur"
];

async function fetchPosters() {
  const urls: Record<string, string> = {};
  for (const title of movies) {
    const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=b9a5e69d`);
    const data = await res.json();
    if (data.Poster && data.Poster !== 'N/A') {
      urls[title] = data.Poster;
    } else {
      urls[title] = "Not found";
    }
  }
  console.log(JSON.stringify(urls, null, 2));
}

fetchPosters();
