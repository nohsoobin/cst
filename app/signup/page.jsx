import React from "react";

const Page = () => {
  return (
    <div>
      <div className="container text-center">
        <form className="form-signin">
          <h1 className="h3 mt-5 font-weight-normal">Sign Up✍️</h1>
          <div className="mt-5">
            <div className="form-group">
              <label htmlFor="lastname">성 :</label>
              <input
                type="text"
                id="lastname"
                placeholder="성 (last name)"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">이름 :</label>
              <input
                type="text"
                id="firstname"
                placeholder="이름 (first name)"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="nickname">닉네임 :</label>
              <div className="input-group">
                <input
                  type="text"
                  id="nickname"
                  placeholder="닉네임(띄어쓰기 없이 2자 이상)"
                  className="form-control nickname"
                  required
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    중복확인
                  </button>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="call">전화번호 :</label>
              <div className="input-group">
                <input
                  type="num"
                  id="call"
                  placeholder="-없이 전화번호를 입력해주세요"
                  className="form-control num"
                  required
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    인증번호 전송
                  </button>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="id">사용자 이름 :</label>
              <input
                type="text"
                id="id"
                placeholder="아이디를 입력해주세요"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="passwd">비밀번호 :</label>
              <input
                type="password"
                id="passwd"
                placeholder="비밀번호를 입력해주세요"
                className="form-control"
                required
              />
            </div>

            <button className="btn btn-lg btn-danger btn-block" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
