import React from "react";

const location = () => {
  return (
    <div class="container">
      <p class="m-3 mt-1 p-2 se">
        <img src="/location.jpg" alt="지도" class="m-5 p-2"></img>
        *세종관 2층 오디세이아, 인농관 4층 커피킹 옆 북카페에서 대여 혹은 반납할
        수 있습니다.*
      </p>
      <div class="jpgs">
        <div class="imgs d-flex justify-content-center">
          <img src="1.jpg" alt="세종관" class="m-5 p-2"></img>
          <img src="2.jpg" alt="인농관" class="m-5 p-2"></img>
        </div>
      </div>
    </div>
  );
};

export default location;
