import { Link, Route, Routes, useLocation } from "react-router";
import { TermsOfService } from "./TermsOfService";
import { Privacy } from "./TermsOfPrivacy";
import { TermsOfLocation } from "./TermsOfLocation";

export const Terms = () => {
  const location = useLocation();

  return (
    <div>
      <nav
        style={{
          marginBottom: "20px",
          borderBottom: "1px solid #ddd",
          paddingBottom: "10px",
        }}
      >
        <Link
          to="/terms"
          style={{
            marginRight: "20px",
            textDecoration:
              location.pathname === "/terms" ? "underline" : "none",
          }}
        >
          기본 이용약관
        </Link>
        <Link
          to="/terms/privacy-policy"
          style={{
            marginRight: "20px",
            textDecoration:
              location.pathname === "/terms/privacy-policy"
                ? "underline"
                : "none",
          }}
        >
          개인정보 처리방침
        </Link>
        <Link
          to="/terms/location-policy"
          style={{
            textDecoration:
              location.pathname === "/location-policy" ? "underline" : "none",
          }}
        >
          위치기반 이용약관
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/location-policy" element={<TermsOfLocation />} />
      </Routes>
    </div>
  );
};
