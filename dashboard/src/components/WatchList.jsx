import React, { useState } from "react";

export const WatchList = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />

        <span className="counts">0 / 50</span>
      </div>
      <ul className="list"></ul>
    </div>
  );
};
