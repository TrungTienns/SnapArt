import React from "react";
import Header from "../../../layout/Header/Header.jsx";

import blogImage from "../../../assets/images/blog_image4.jpg"; // ảnh minh họa cho blog4

import "./Blog4.scss";

function Blog4() {
  return (
    <div className="blog4-page">
        {/* Header */}
        <Header />
      <div className="blog4-container">
        <h1 className="blog-title">Vẽ Để Chữa Lành – Hành Trình Từ Bóng Tối Đến Ánh Sáng</h1>

        <p>
          Tôi từng cảm thấy thế giới xung quanh mình chỉ toàn màu xám. Mỗi ngày trôi qua là một chuỗi cảm giác mệt mỏi, mất động lực, và cô đơn. Trầm cảm không chỉ ảnh hưởng đến tinh thần, mà còn làm tôi mất niềm vui trong những việc tưởng chừng đơn giản nhất.
        </p>

        <p>
          Một ngày, tôi tình cờ cầm cọ vẽ. Không biết từ đâu, nhưng những nét cọ đầu tiên mang lại cho tôi cảm giác nhẹ nhõm kỳ lạ. Mỗi màu sắc, mỗi đường nét như nói chuyện với tâm hồn tôi. Tôi bắt đầu dành thời gian mỗi ngày cho vẽ tranh, không quan trọng kết quả đẹp hay xấu, chỉ cần là cảm xúc của tôi được trút ra trên giấy.
        </p>

        <p>
          Qua từng bức tranh, tôi nhận ra mình không còn cảm thấy cô đơn. Vẽ giúp tôi nhìn thấy niềm vui trong những điều nhỏ nhặt, giúp tôi hiểu rằng cảm xúc, dù đau khổ đến đâu, cũng có thể được chuyển hóa thành cái đẹp.
        </p>

        <p>
          Hành trình chữa lành không diễn ra trong một ngày, nhưng từng nét vẽ, từng màu sắc đã dần giúp tôi lấy lại năng lượng, sự tự tin và hy vọng. Ngày hôm nay, tôi có thể mỉm cười với chính mình, và tôi tin rằng bất cứ ai cũng có thể tìm thấy ánh sáng giữa bóng tối nếu biết lắng nghe tâm hồn qua nghệ thuật.
        </p>

        <div className="blog-image">
          <img src={blogImage} alt="Minh họa vẽ chữa lành" />
        </div>
      </div>
        {/* Footer */}
        <Footer />
    </div>
  );
}

export default Blog4;