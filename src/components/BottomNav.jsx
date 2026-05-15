// components/BottomNav.jsx
import {
  House,
  CreditCard,
  Search,
  Menu,
} from "lucide-react";

function BottomNav({ setPage }) {
  return (
    <div className="bottom-nav">
      <button
        className="nav-item"
        onClick={() => setPage("home")}
      >
        <House size={22} />
        <span>홈</span>
      </button>

      <button className="nav-item">
        <CreditCard size={22} />
        <span>카드</span>
      </button>

      <button
        className="nav-item"
        onClick={() => setPage("search")}
      >
        <Search size={22} />
        <span>검색</span>
      </button>

      <button className="nav-item">
        <Menu size={22} />
        <span>더보기</span>
      </button>
    </div>
  );
}

export default BottomNav;