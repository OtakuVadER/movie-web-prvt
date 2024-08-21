window.__CONFIG__ = {
  // The URL for the CORS proxy, the URL must NOT end with a slash!
  VITE_CORS_PROXY_URL: "https://prvt-proxy.netlify.app/",

  // The READ API key to access TMDB
  VITE_TMDB_READ_API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzhjNjQ5MDVlZGRhZDY0OTBhZTc3MjBkMmZkZGUyMyIsInN1YiI6IjY1OWU1MjUzOTU5MGUzMDI1ZWUyMzg0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hm9k0_5fe7z1g-vghfLUjenjYIC5vnNu0UZx1Qmnh54",

  // The DMCA email displayed in the footer, null to hide the DMCA link
  VITE_DMCA_EMAIL: null,

  // Whether to disable hash-based routing, leave this as false if you don't know what this is
  VITE_NORMAL_ROUTER: false,

  // The backend URL to communicate with, defaults to the movie-web hosted one at backend.movie-web.app
  VITE_BACKEND_URL: "https://backend.undi.rest/",

  // A comma separated list of disallowed IDs in the case of a DMCA claim - in the format "series-<id>" and "movie-<id>"
  VITE_DISALLOWED_IDS: ""
};
