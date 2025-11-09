import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/shared/ui/logo/logo";
import NavLink from "@/shared/ui/nav-link/nav-link";

const year: number = new Date().getFullYear()

const Footer = () => {
  return <footer>
    <div className="bg-[linear-gradient(180deg,_#1b1b1b_29%,_#323232_100%)]">
      <div className="container mx-auto px-5">

        <div className="flex justify-center py-9">
          <Logo width={150} height={150} src={"/logo2.png"} />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white text-medium">Корисни Линкови:</p>
            <ul className="flex justify-between items-center">
              <li className=" mr-5 text-medium text-white"><NavLink href="/">Почетна</NavLink></li>
              <li className="mr-5 text-medium text-white"><NavLink href="/about">За Нас</NavLink></li>
              <li className="text-medium text-white"><NavLink href="/contact">Контакт</NavLink></li>
            </ul>
          </div>
          <div>
            <p>icons</p>
          </div>
        </div>

        <div className="container pt-0.5 bg-white rounded-2xl"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between pb-20 pt-10">
          <span className="text-default text-white pb-2 sm:pb-0 ">&copy; {year} Астера Мој Дом</span>
          <span className="text-default text-white">Designed & developed by Vladimir Momiroski</span>
        </div>
      </div>
    </div>
  </footer>
};

export default Footer;
