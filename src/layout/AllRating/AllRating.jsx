import React from "react";
import "./AllRating.scss";
import PeopleImg1 from "../../assets/images/people/people1.jpg";
import PeopleImg2 from "../../assets/images/people/people2.jpg";
// Dữ liệu chay
const ratingsData = [
  {
    id: 1,
    name: "Nguyễn Thị Mỹ Quyền",
    email: "a@gmail.com",
    avatar: PeopleImg1,
    message: "Workshop rất tuyệt, mình đã học được nhiều kỹ thuật mới!"
  },
  {
    id: 2,
    name: "Nguyễn Thị Ngọc Mai",
    email: "b@gmail.com",
    avatar: PeopleImg2,
    message: "Khi tới với SnapArt, mình cảm thấy bình yên và được chữa lành sau những ngày làm việc căng thẳng, nhờ có SnapArt mình mới thấy được thế giới này đẹp đến nhường nào."
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "c@gmail.com",
    avatar: "https://i.pravatar.cc/100?img=12",
    message: "Mình thích cách hướng dẫn, cảm ơn team SnapArt rất nhiều!"
  }
];

const AllRating = () => {
  return (
    <div className="all-rating">
      <h2>Những đánh giá từ khách hàng</h2>
      <div className="rating-list">
        {ratingsData.map((rating) => (
          <div key={rating.id} className="rating-box">
            <div className="avatar">
              <img src={rating.avatar} alt={rating.name} />
            </div>
            <div className="rating-content">
              <h3>{rating.name}</h3>
              <span className="email">{rating.email}</span>
              <p>{rating.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRating;