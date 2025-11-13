// src/pages/WorkShop/WorkPage4/WorkPage4.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WorkPage4.scss";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import paintingImage from "../../../assets/images/products/product_image4.jpg";

const WorkPage4 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="workpage">
        <Header />
        <div className="workshop-article">
          <h1 data-aos="fade-up">Workshop Vẽ Tranh Tâm Tình</h1>
          <img
            src={paintingImage}
            alt="Workshop Vẽ Tranh Tâm Tình"
            data-aos="zoom-in"
            className="article-image"
          />
          <div className="article-content" data-aos="fade-up">
            <p>
              Đôi khi, không cần phải là một họa sĩ chuyên nghiệp mới có thể vẽ
              nên cảm xúc của chính mình. <strong>Workshop Vẽ Tranh Tâm Tình</strong>{" "}
              là không gian nơi bạn có thể lắng nghe tâm hồn, thả hồn vào từng
              nét cọ, và để cảm xúc dẫn lối trên nền toan trắng.
            </p>
            <p>
              Trong mỗi buổi học, bạn sẽ được hướng dẫn cách chọn màu sắc, bố
              cục, và kỹ thuật vẽ tự do, nhằm giúp bạn thể hiện được những câu
              chuyện và kỷ niệm qua hội họa. Không áp lực, không so sánh — chỉ
              có bạn và chính mình.
            </p>
            <p>
              Mục tiêu của workshop không chỉ là tạo ra một bức tranh đẹp, mà là
              mang đến sự thư giãn, chữa lành và tái kết nối cảm xúc bên trong.
              Dưới ánh đèn ấm áp và âm nhạc nhẹ nhàng, mỗi buổi vẽ là một hành
              trình tìm lại bình yên.
            </p>
            <p>
              Hãy đến với chúng tôi và cùng trải nghiệm nghệ thuật từ trái tim.
              Đừng lo nếu bạn chưa từng cầm cọ — chúng tôi ở đây để đồng hành và
              khơi dậy niềm vui trong từng đường nét!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WorkPage4;