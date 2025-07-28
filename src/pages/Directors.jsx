import React from "react";
import NavBar from "../components/NavBar";

const directors = [
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Sky High"]
  },
  {
    name: "Jennifer Lee",
    movies: ["Frozen", "Frozen II", "Doctor Strange"]
  },
  {
    name: "Edward Zwick",
    movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"]
  },
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange"]
  }
];

function Directors() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        <ul>
          {directors.map((director) => (
            <li key={director.name}>
              <h2>{director.name}</h2>
              <ul aria-label={`${director.name}'s movies`}>
                {director.movies.map((movie) => (
                  <li key={movie}>{movie}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Directors;
