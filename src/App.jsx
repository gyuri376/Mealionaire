// App.jsx
import { useState } from "react";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Result from "./pages/Result";

function App() {
  const [page, setPage] =
    useState("home");

  const [keyword, setKeyword] =
    useState("");

  const [recentKeywords, setRecentKeywords] =
    useState([]);

  return (
    <div className="app">
      <div className="phone-frame">
        {page === "home" && (
          <Home setPage={setPage} />
        )}

        {page === "search" && (
          <Search
            setPage={setPage}
            keyword={keyword}
            setKeyword={setKeyword}
            recentKeywords={
              recentKeywords
            }
            setRecentKeywords={
              setRecentKeywords
            }
          />
        )}

        {page === "result" && (
          <Result
            keyword={keyword}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
}

export default App;