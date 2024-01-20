"use client";
import { useRouter } from "next/navigation";
//🔍🔍[SEARCH BAR]🔍🔍
import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter(); //🔍🔍[SEARCH BAR]🔍🔍 this is how we make our SearchBar to find what we type
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* 🔍🔍[SEARCH BAR]🔍🔍 this is just React, we are taking the data from the Input/SearchBar with (e.target.disable) and pass it to 'setSearch' */}
      <button className="text-amber-600 disabled:invisible" disabled={!search}>
        Search
      </button>
      {/* 🔍🔍[SEARCH BAR]🔍🔍 we use 'disabled={!search}' to make the button visible only when the user is typing something in the SearchBar */}
    </form>
  );
}
