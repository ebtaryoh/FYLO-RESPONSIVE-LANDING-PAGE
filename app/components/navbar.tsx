import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return ( 
    <div className="flex flex-row gap-20 lg:space-x-96 lg:gap-96 my-5 lg:ms-0 ">
      <Image src={logo} alt="logo" width={80} />
     <div className="text-[#ffffff] flex flex-row gap-7 text-xs ">
     <Link href="/features">
        <p>Features</p>
      </Link>
      <Link href="/features">
        <p>Team</p>
      </Link>
      <Link href="/features">
        <p>Sign in</p>
      </Link>
     </div>
    </div>
  );
};

export default Navbar;
