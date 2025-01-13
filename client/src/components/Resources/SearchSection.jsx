import React, { useState } from "react";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState(""); // To hold the search input
  const [selectedCategory, setSelectedCategory] = useState("All Categories"); // Category dropdown

  const cards = [
   
  ];

  // Filtered Cards based on search query and selected category
  const filteredCards = cards.filter((card) =>
    searchQuery
      ? card.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );

  return (
    <div className=" max-w-3xl mx-auto w-[500px] mt-20 p-6">
      {/* Search Bar */}
      <div className=" rounded-lg shadow-lg p-4  flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="outline-none text-gray-700 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className="outline-none bg-gray-100 rounded-lg px-3 py-1"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>All Categories</option>
          <option value="smtp">SMTP</option>
          <option value="amazon">Amazon SES</option>
          <option value="send">Send</option>
        </select>
        <button className="bg-lgreen text-white px-4 py-2 rounded-lg">
          SEARCH
        </button>
      </div>

      {/* Popular Searches */}
      <div className="mt-4 flex gap-2">
        <span className="text-gray-600">Popular Search:</span>
        <div className="flex gap-2">
          {["the", "smtp", "amazon", "send"].map((keyword) => (
            <button
              key={keyword}
              className="px-3 py-1 bg-gray-100 rounded-lg text-gray-500 hover:bg-gray-200"
              onClick={() => setSearchQuery(keyword)}
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
