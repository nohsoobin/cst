import React from "react";

const Login = () => {
  return (
    <div>
      <div class="container text-center">
        <form class="form-signin mt-5">
          <h1 class="h3 mb-3 font-weight-normal">Log In 🔐</h1>
          <br />
          <br />
          <label for="inputid" class="sr-only">
            ID
          </label>
          <input
            type="text"
            id="inputid"
            class="form-control"
            placeholder="아이디"
          />
          <br />
          <label for="inputPassword" class="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="비밀번호"
          />
          <div class="checkbox mb-3">
            <label class="float-left">
              <input type="checkbox" value="remember-me" />
              아이디 기억하기
            </label>
          </div>
          <button
            class="btn btn-lg btn-danger btn-block click"
            id="login"
            type="submit"
          >
            log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
