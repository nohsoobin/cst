import React from "react";

const rent = () => {
  return (
    <div>
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-6">대여 할 기기를 선택해주세요</h1>
        <p class="lead">
          잘못 선택시 올바르지 않은 기기가 대여 될 수 있습니다😫 꼭! 확인하고
          골라주세요🫠
        </p>
      </div>
      <div class="container mb-5">
        <div class="card-deck mb-3 text-center">
          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">노트북 충전기</h4>
            </div>
            <div class="card-body_r">
              <img
                src="https://cdn-icons-png.flaticon.com/512/689/689396.png"
                alt="노트북"
              />
              <ul class="list-unstyled mt-3 mb-4">
                <li>Samsung Galaxy</li>
                <li>LG Gram</li>
                <li>Apple Macbook</li>
              </ul>
              <div class="container">
                <a href="laptop.html">
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-outline-danger btn_re"
                  >
                    Click
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rent;
