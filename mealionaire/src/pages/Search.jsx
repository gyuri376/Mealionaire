// pages/Search.jsx
import BottomNav from "../components/BottomNav";

function Search({
  setPage,
  keyword,
  setKeyword,
  recentKeywords,
  setRecentKeywords,
}) {
  const popularKeywords = [
    "샤인머스켓",
    "한라봉",
    "애플망고",
    "딸기",
    "수박",
  ];

  const handleSearch = () => {
    if (keyword.trim() === "") return;

    if (
      !recentKeywords.includes(keyword)
    ) {
      setRecentKeywords([
        keyword,
        ...recentKeywords,
      ]);
    }

    setPage("result");
  };

  const removeKeyword = (item) => {
    setRecentKeywords(
      recentKeywords.filter(
        (keyword) => keyword !== item
      )
    );
  };

  return (
    <div className="screen modern-bg">
      <div className="search-header">
        <button
          className="back-btn"
          onClick={() => setPage("home")}
        >
          ←
        </button>

        <input
          type="text"
          placeholder="검색어 입력"
          className="search-input"
          value={keyword}
          onChange={(e) =>
            setKeyword(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button
          className="search-btn"
          onClick={handleSearch}
        >
          검색
        </button>
      </div>

      <div className="search-section">
        <div className="section-header">
          <h3>최근 검색어</h3>
        </div>

        <div className="keyword-wrap">
          {recentKeywords.map(
            (item, index) => (
              <button
                key={index}
                className="keyword-btn"
              >
                {item}

                <span
                  onClick={() =>
                    removeKeyword(item)
                  }
                >
                  ×
                </span>
              </button>
            )
          )}
        </div>
      </div>

      <div className="search-section">
        <div className="section-header">
          <h3>인기 검색어</h3>
        </div>

        <div className="popular-list">
          {popularKeywords.map(
            (item, index) => (
              <div
                key={index}
                className="popular-item"
                onClick={() =>
                  setKeyword(item)
                }
              >
                <span>
                  {index + 1}
                </span>

                <p>{item}</p>
              </div>
            )
          )}
        </div>
      </div>

      <BottomNav setPage={setPage} />
    </div>
  );
}

export default Search;