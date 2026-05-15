// pages/Home.jsx
import BottomNav from "../components/BottomNav";

function Home({ setPage }) {
  return (
    <div className="screen modern-bg">
      <div className="top-card">
        <p className="account-title">
          국민은행
        </p>

        <h2>420,090원</h2>

        <span>
          12345667-01-543210
        </span>
      </div>

      <div className="chart-card">
        <div className="card-header">
          <h3>카테고리 별 지출</h3>

          <span>이번 달</span>
        </div>

        <div className="pie-chart">
          <div className="label blue">
            온라인 25%
          </div>

          <div className="label red">
            식당 40%
          </div>

          <div className="label green">
            카페 35%
          </div>
        </div>
      </div>

      <div className="ai-card">
        <p className="ai-title">
          AI 소비 한줄평
        </p>

        <h1>
          NO MORE DELIVERY
        </h1>

        <span>
          지난 달 대비 배달관련 소비가
          10% 증가하였습니다.
        </span>
      </div>

      <BottomNav setPage={setPage} />
    </div>
  );
}

export default Home;