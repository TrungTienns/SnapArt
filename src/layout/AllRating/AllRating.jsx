import React from "react";
import { useTranslation } from "react-i18next";
import "./AllRating.scss";

import PeopleImg1 from "../../assets/images/people/people1.png";
import PeopleImg2 from "../../assets/images/people/people2.png";
import PeopleImg3 from "../../assets/images/people/people3.png";
import PeopleImg4 from "../../assets/images/people/people4.png";
// Link Google Maps review
const GOOGLE_REVIEW_LINK = "https://maps.app.goo.gl/RGACh51aduqJ2SnS7?g_st=ic";

// Mock data (review mẫu)
const ratingsData = [
  {
    id: 1,
    name: "Alice Nguyen",
    avatar: PeopleImg1,
    rating: 5,
    time: "2 weeks ago",
    message:
      "Đến trải nghiệm vào hôm khai trương. Tiệm nhỏ ấm cúng. Cô chủ thân thiện."
  },
  {
    id: 2,
    name: "Hoà Giai",
    avatar: PeopleImg2,
    rating: 5,
    time: "2 weeks ago",
    message: "Nhân viên nhiệt tình thân thiện, giá cả hợp lý."
  },
  {
    id: 3,
    name: "Khánh La",
    avatar: PeopleImg3,
    rating: 5,
    time: "2 weeks ago",
    message:
      "Chị chủ siêuuuu nice lunnn, vô cùng kiên nhẫn với 1 đứa mù thẩm mĩ như tui và cuối cùng bức vẽ cũng rất oke ạaaaa"
  },
  {
    id: 4,
    name: "Ngọc Mai",
    avatar: PeopleImg4,
    rating: 5,
    time: "2 weeks ago",
    message:
      "Chị chủ dễ thương, không gian thơ mộng, trải nghiệm tuyệt vời"
  }
];

// render sao
const Stars = ({ value = 5 }) => {
  const full = Math.max(0, Math.min(5, value));
  return (
    <div className="stars" aria-label={`${full} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? "star active" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
};

const AllRating = () => {
  const { t } = useTranslation();

  return (
    <section className="all-rating">
      {/* Heading đa ngôn ngữ */}
      <div className="rating-header">
        <h2>{t("allRating.heading")}</h2>

        <p className="sub">
          {t("allRating.subHeading")}
        </p>

        <a
          className="google-btn"
          href={GOOGLE_REVIEW_LINK}
          target="_blank"
          rel="noreferrer"
        >
          {t("allRating.viewOnGoogle")}
        </a>
      </div>

      {/* List mock reviews */}
      <div className="rating-list">
        {ratingsData.map((rating, idx) => (
          <article
            key={rating.id}
            className="rating-box"
            style={{ animationDelay: `${idx * 0.08}s` }}
            onClick={() => window.open(GOOGLE_REVIEW_LINK, "_blank")}
          >
            <div className="avatar">
              <img src={rating.avatar} alt={rating.name} />
            </div>

            <div className="rating-content">
              <div className="top-row">
                <h3>{rating.name}</h3>
                <span className="google-badge">Google</span>
              </div>

              <div className="meta">
                <Stars value={rating.rating} />
                <span className="time">{rating.time}</span>
              </div>

              <p className="message">{rating.message}</p>

              <span className="hint">{t("allRating.clickHint")}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AllRating;