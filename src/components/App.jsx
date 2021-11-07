import React from "react";
import "./global.scss";
import { Home } from "./Home";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useSearchParams,
  Navigate,
} from "react-router-dom";

export const App = () => {
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  let searchQuery = searchParams.get("searchQuery");
  let genreQuery = searchParams.get("genre");
  let sortByQuery = searchParams.get("sortBy");
  let movieQuery = searchParams.get("movie");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/search" />} />
      <Route
        exact
        path="/search"
        element={
          <Home
            movieQuery={movieQuery}
            searchQuery={searchQuery}
            genreQuery={genreQuery}
            sortByQuery={sortByQuery}
          />
        }
      />
      <Route
        path="/search?:searchQuery&movie&genre&sortBy"
        element={
          <Home
            movieQuery={movieQuery}
            searchQuery={searchQuery}
            genreQuery={genreQuery}
            sortByQuery={sortByQuery}
          />
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

function ErrorPage() {
  return (
    <div>
      <h2>Error page</h2>
      <p>
        <Link to="/search">Go to the home page</Link>
      </p>
    </div>
  );
}
