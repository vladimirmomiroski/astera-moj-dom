
import Logo from "@/shared/ui/logo/logo"
import NavLink from "@/shared/ui/nav-link/nav-link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="bg-light-blue hidden sm:block">
        <div className="py-2 px-5 flex justify-between items-center container mx-auto">
          <div>
            <NavLink href="https://www.facebook.com/" target="_blank" color="text-white"><FontAwesomeIcon icon={faFacebook} className="mr-1 text-medium text-white" /></NavLink>
            <NavLink href="https://www.instagram.com/" target="_blank" color="text-white"><FontAwesomeIcon icon={faInstagram} className="mr-1 text-medium text-white" /></NavLink>
          </div>
          <div className="flex items-center justify-around">
            <FontAwesomeIcon className="text-medium text-white pr-1" icon={faLocationDot} />
            <span className="text-small text-white mr-5">ул. Киро Крстевски 15</span>
            <FontAwesomeIcon className="text-medium text-white pr-1" icon={faPhone} />
            <span className="text-small text-white">071-868-800</span>
          </div>
        </div>
      </div>
      <div className="container flex justify-between items-center px-5 py-6 mx-auto">
        < div >
          <Logo width={115} height={115} src={"/logo1.png"} />
        </div >
        <div>
          <ul className="flex justify-between align-middle">
            <li className=" mr-5 text-medium"><NavLink href="/" color="text-black" >Почетна</NavLink></li>
            <li className="mr-5 text-medium"><NavLink href="/about" color="text-black">За Нас</NavLink></li>
            <li className="text-medium"><NavLink href="/contact" color="text-black">Контакт</NavLink></li>
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default Navbar
