import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white p-6 mt-10">
        <ul>
          <li>
            <a href="https://www.joongbu.ac.kr/index.es?sid=a1">회사 소개</a>
          </li>
          <li>
            <Link href="/maker">개발자들</Link>
          </li>
          <li>
            <a
              href="https://bot.dialogflow.com/06f4b1a5-fa2f-4821-813c-23088abb102e"
              alt="챗봇 주소"
            >
              자주 묻는 질문
            </a>
          </li>
          <li>
            <p>Copyright &copy; 2023, 전자기기 대여 서비스 전대여🖖</p>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
