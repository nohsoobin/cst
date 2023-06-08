import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container flex">
        <div className="logo">
          <Link href="/">HOME</Link>
        </div>
        <div className="links">
          <Link href="/location"> LOCATION</Link>
          <Link href="/return">RETURN</Link>
          <Link href="/about/repos"></Link>
          <Link href="/">HOME</Link>
        </div>
        <div className="sign">
          <button>
            <Link href="/login" legacyBehavior>
              로그인🔐
            </Link>
          </button>
          <button>
            <Link href="/signup" legacyBehavior>
              회원가입✍️
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
