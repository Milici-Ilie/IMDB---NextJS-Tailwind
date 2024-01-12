import React from "react";

//⚡⚡[FETCHING DATA FROM API]⚡⚡ this is how we loop over the data that we receive from the API and display it
export default function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.original_title}</h2>
        </div>
      ))}
    </div>
  );
}
