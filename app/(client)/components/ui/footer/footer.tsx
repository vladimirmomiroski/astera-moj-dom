import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/shared/ui/logo/logo";
import NavLink from "@/shared/ui/nav-link/nav-link";

const year: number = new Date().getFullYear()

const Footer = () => {
  return <footer>
    <div className="bg-[linear-gradient(180deg,#2c3648_50%,#3a465d_100%)]">
      <div className="container mx-auto px-5">

        <div className="flex justify-center py-8">
          <Logo width={150} height={150} src={"/logo2.png"} />
        </div>
        <div className="flex justify-between items-center">
          <div className="py-6">
            <ul className="flex justify-between items-center">
              <li className=" mr-5 text-medium text-white"><NavLink href="/" color="text-white">Почетна</NavLink></li>
              <li className="mr-5 text-medium text-white"><NavLink href="/about" color="text-white">За Нас</NavLink></li>
              <li className="text-medium text-white"><NavLink href="/contact" color="text-white">Контакт</NavLink></li>
            </ul>
          </div>
          <div>
            <NavLink href="https://www.facebook.com/" target="_blank" color="text-white"><FontAwesomeIcon icon={faFacebook} className="text-large text-white" /></NavLink>
            <NavLink href="https://www.instagram.com/" target="_blank" color="text-white"><FontAwesomeIcon icon={faInstagram} className="text-large text-white" /></NavLink>
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
