export interface Movie {
  id: string;
  title: string;
  genre: string[];
  year: number;
  description: string;
  posterUrl: string;
  youtubeId?: string;
}

export const initialMovies: Movie[] = [
  {
    id: "1",
    title: "The Matrix",
    genre: ["Action", "Sci-Fi"],
    year: 1999,
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "vKQi3bBA1y8"
  },
  {
    id: "2",
    title: "Inception",
    genre: ["Action", "Sci-Fi", "Thriller"],
    year: 2010,
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    youtubeId: "YoHD9XEInc0"
  },
  {
    id: "3",
    title: "The Shawshank Redemption",
    genre: ["Drama"],
    year: 1994,
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "6hB3S9bIaco"
  },
  {
    id: "4",
    title: "The Godfather",
    genre: ["Crime", "Drama"],
    year: 1972,
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "UaVTIH8mujA"
  },
  {
    id: "5",
    title: "Pulp Fiction",
    genre: ["Crime", "Drama"],
    year: 1994,
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "s7EdQ4FqVwk"
  },
  {
    id: "6",
    title: "The Dark Knight",
    genre: ["Action", "Crime", "Drama"],
    year: 2008,
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    youtubeId: "EXeTwQWrcwY"
  },
  {
    id: "7",
    title: "Forrest Gump",
    genre: ["Drama", "Romance"],
    year: 1994,
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "bLvqoHBptjg"
  },
  {
    id: "8",
    title: "Fight Club",
    genre: ["Drama"],
    year: 1999,
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "qtRKdVHc-cE"
  },
  {
    id: "9",
    title: "Goodfellas",
    genre: ["Biography", "Crime", "Drama"],
    year: 1990,
    description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "2ilzidi_J8Q"
  },
  {
    id: "10",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: ["Action", "Adventure", "Drama"],
    year: 2001,
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "V75dSyq10b8"
  },
  {
    id: "11",
    title: "Spirited Away",
    genre: ["Animation", "Adventure", "Family"],
    year: 2001,
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "ByXuk9QqQkk"
  },
  {
    id: "12",
    title: "Interstellar",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    year: 2014,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "zSWdZVtXT7E"
  },
  {
    id: "13",
    title: "3 Idiots",
    genre: ["Comedy", "Drama"],
    year: 2009,
    description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "K0eDlFX9GMc"
  },
  {
    id: "14",
    title: "Dangal",
    genre: ["Action", "Biography", "Drama"],
    year: 2016,
    description: "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg",
    youtubeId: "x_7YlGv9u1g"
  },
  {
    id: "15",
    title: "Baahubali: The Beginning",
    genre: ["Action", "Drama"],
    year: 2015,
    description: "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWZlOWUtYjZkMy00Y2NjLWFhYWItM2FkZDM4Y2U1YWM2XkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "sOEg_YZQsTI"
  },
  {
    id: "16",
    title: "RRR",
    genre: ["Action", "Drama"],
    year: 2022,
    description: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920s.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNDAwNTI0MTA3LThkYTMtZmY4M2I3MGMwYjBjXkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "NgBoMJy386M"
  },
  {
    id: "17",
    title: "K.G.F: Chapter 1",
    genre: ["Action", "Crime", "Drama"],
    year: 2018,
    description: "In the 1970s, a gangster goes undercover as a slave to assassinate the owner of a notorious gold mine.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDg1MTg5ZTUtYjU3Ny00MWFiLTg4MzctY2QzNzExZDBmMmZhXkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "-KfsY-qwBS0"
  },
  {
    id: "18",
    title: "Lagaan: Once Upon a Time in India",
    genre: ["Drama", "Musical", "Sport"],
    year: 2001,
    description: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA4OTY5MTMwMV5BMl5BanBnXkFtZTgwMDUxNDQxMTE@._V1_SX300.jpg",
    youtubeId: "oSIGQ0YkFqQ"
  },
  {
    id: "19",
    title: "PK",
    genre: ["Comedy", "Drama", "Sci-Fi"],
    year: 2014,
    description: "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of religion on its people.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_SX300.jpg",
    youtubeId: "82ZEDGPCkT8"
  },
  {
    id: "20",
    title: "Sholay",
    genre: ["Action", "Adventure", "Comedy"],
    year: 1975,
    description: "After his family is murdered by a notorious and ruthless bandit, a former police officer enlists the services of two outlaws to capture the bandit.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNmI1NTRmMWQtNDJlZC00MGIzLWEwYzctYTQwNTI2NWNjM2MwXkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "h_2-D9F4JDE"
  },
  {
    id: "21",
    title: "Dilwale Dulhania Le Jayenge",
    genre: ["Drama", "Romance"],
    year: 1995,
    description: "When Raj meets Simran in Europe, it isn't love at first sight but when Simran moves to India for an arranged marriage, love makes its presence felt.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDQyMDI4ZGMtYjI5MS00YTk1LTk3ZDgtZTA3MzQ5YWQ4Y2Q4XkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "c25GKl5VNeY"
  },
  {
    id: "22",
    title: "Swades",
    genre: ["Drama"],
    year: 2004,
    description: "A successful Indian scientist returns to an Indian village to take his nanny to America with him and in the process rediscovers his roots.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZWJlNmQ2NmQtM2U3Yi00MTZjLWI1YzktY2I2MmExMzgwNmE3XkEyXkFqcGc@._V1_SX300.jpg",
    youtubeId: "NC7GuOoFglQ"
  },
  {
    id: "23",
    title: "Gangs of Wasseypur",
    genre: ["Action", "Comedy", "Crime"],
    year: 2012,
    description: "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_SX300.jpg",
    youtubeId: "j-AkWDkXcMY"
  }
];
