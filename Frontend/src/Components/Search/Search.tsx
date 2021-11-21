import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { withRouter } from "react-router-dom";
import { History } from "history";

import "./Search.scss";

interface SearchProps {
  history: History;
}

const Search: React.FC<SearchProps> = ({ history }) => {
  const [input, setInput] = useState("");

  const onSubmit = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      history.push(`/shop/search/${input}`);
    }
  };

  return (
    <div className="search-box">
      <input
        placeholder="What are you looking for?"
        name="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={onSubmit}
      ></input>
      <MdSearch
        className="search-icon"
        onClick={() => history.push(`/shop/search/${input}`)}
      />
    </div>
  );
};

export default withRouter(Search);
