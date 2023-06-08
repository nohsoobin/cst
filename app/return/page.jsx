import React from "react";
import Head from "next/head";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-white-500 min-h-screen">
      <Head>
        <title>전대여🖖반납하러 가기</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <main className="container mx-auto p-4">
        <h2 className="text-xl mb-4">반납</h2>
        <section>
          <div className="container">
            <p>
              전대여🖖는 노트북 사용이 잦은 대학생의 원활한 충전을 위하여
              개발되었습니다.
              <br />
              각 건물에서 대여 및 반납이 가능하며, 화재 및 도난 방지를 위하여
              대여, 반납 시간에 제한이 존재합니다.
              <br />
              모든 충전기는 정품을 사용하고 있습니다.
            </p>
          </div>
        </section>
        <section>
          <div class="container text-center mt-5">
            <h2>반납하시겠습니까?</h2>
            <br />
            <a href="realreturn.html">
              <button class="mr-5 btn_r">예</button>
            </a>
            <a href="extend.html">
              <button class="btn_r">아니오 (연장하기⚡)</button>
            </a>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 mt-8">
        &copy; 2023 전자기기 대여 서비스. All rights reserved.
      </footer>
    </div>
  );
};

export default page;
