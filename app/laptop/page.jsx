import React from "react";

const laptop = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>메뉴</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>25</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>30</td>
            <td>London</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>35</td>
            <td>Paris</td>
          </tr>
        </tbody>
      </table>
      <h3>
        총 대여 수량 : <span id="sum"></span>
        <button
          class="btn mr-1 btn-outline-danger float-right"
          onclick="eodu()"
        >
          대여하기
        </button>
      </h3>
      <div class="container">
        <div class="imgs d-flex justify-content-center">
          <img src="/lg.jpg" />
          <img src="/samsung.jpg" />
          <img src="/mac.jpg" />
        </div>
        <div class="main-img">
          <img src="/lg.jpg" id="current" />
        </div>
      </div>
      <script></script>
    </div>
  );
};

export default laptop;
