const API_KEY = process.env.API_KEY; //⚡⚡[FETCHING DATA FROM API]⚡⚡ this is how we connect our variable to the API KEY from '.env.local'

import Results from "@/components/Results";
import React from "react";

//🔃🔃[LOADING EFFECT]🔃🔃
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3${
          genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
        }?api_key=${API_KEY}&language=en-US&page=1`,
        { next: { revalidate: 5 } }
      );
      resolve(response);
    }, 2000);
  }); //🔃🔃[LOADING EFFECT]🔃🔃

  // console.log(res);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;
  // console.log(results);

  return (
    <div>
      <Results results={results} />
    </div>
  );
} //⚡⚡[FETCHING DATA FROM API]⚡⚡ this is how we get data from the API
