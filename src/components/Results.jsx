// import React from "react";
import Card from "./Card";

//⚡⚡[FETCHING DATA FROM API]⚡⚡ this is how we loop over the data that we receive from the API and display it
export default function Results({ results }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 ">
      {/* 💳💳[CARD COMPONENT]💳💳 how to create the responsive GRID card  */}
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
