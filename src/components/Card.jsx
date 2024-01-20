import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
// import React from "react";

export default function Card({ result }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt="images"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        ></Image>
        {/* if we want the HOVER effect to work we need to add 'className='group' at the <div><Image...and also here, check the className='group-hover:opacity-75 ... etc'></Image...and></div> */}
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className=" text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  ); //💳💳[CARD COMPONENT]💳💳 we create a IMG that is a Link to the movie that we select, we imported the <Image>...</Image> from React bcs we take advantage of auto adjusting size of the IMG's, there are 2 links inside of the "src={...}" because the IMG's from the API has 2 paths
}
