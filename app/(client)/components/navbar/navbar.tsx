
import Logo from "@/shared/ui/logo/logo"
import NavLink from "@/shared/ui/nav-link/nav-link"

const Navbar = () => {

  return (
    <nav className="container flex justify-between items-center mx-auto p-5">
      < div >
        <Logo width={100} height={100} />
      </div >
      <div>
        <ul className="flex justify-between align-middle">
          <li className=" pr-5 cursor-pointer hover:text-gold text-medium"><NavLink href="/">Почетна</NavLink></li>
          <li className="pr-5 cursor-pointer hover:text-gold text-medium"><NavLink href="/about">За Нас</NavLink></li>
          <li className="cursor-pointer hover:text-gold text-medium"><NavLink href="/contact">Контакт</NavLink></li>
        </ul>
      </div>
    </nav >
  )
}

export default Navbar
