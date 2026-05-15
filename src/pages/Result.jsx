// pages/Result.jsx
import BottomNav from "../components/BottomNav";

function Result({ keyword, setPage }) {
  const products = [
    {
      image: "/images/grape.jpg",
      name: "씨없는 샤인머스켓 2kg",
      price: "9,600원",
      rating: "4.8",
      review: "109",
      desc: "달콤한 프리미엄 샤인머스켓",
    },

    {
      image: "/images/orange.jpg",
      name: "제주 한라봉 3kg",
      price: "12,900원",
      rating: "4.7",
      review: "228",
      desc: "산지직송 고당도 한라봉",
    },

    {
      image: "/images/mango.jpg",
      name: "애플망고 선물세트",
      price: "24,900원",
      rating: "4.9",
      review: "159",
      desc: "부드럽고 진한 망고 풍미",
    },
  ];

  return (
    <div className="screen modern-bg">
      <div className="search-header">
        <button
          className="back-btn"
          onClick={() => setPage("search")}
        >
          ←
        </button>

        <div className="result-keyword">
          {keyword}
        </div>
      </div>

      <div className="result-top">
        <h2>
          "{keyword}" 검색 결과
        </h2>

        <p>
          총 {products.length}개의 상품
        </p>
      </div>

      <div className="result-list">
        {products.map(
          (product, index) => (
            <div
              className="result-card"
              key={index}
            >
              <img
                src={product.image}
                alt={product.name}
                className="result-image"
              />

              <div className="result-info">
                <div className="rating-row">
                  ⭐ {product.rating}
                  <span>
                    ({product.review})
                  </span>
                </div>

                <h3>{product.name}</h3>

                <p className="result-desc">
                  {product.desc}
                </p>

                <h2 className="result-price">
                  {product.price}
                </h2>
              </div>
            </div>
          )
        )}
      </div>

      <BottomNav setPage={setPage} />
    </div>
  );
}

export default Result;