import logo from "../assets/logo.jpg"
import { navItems } from "../constants"

const Navbar = () => {
    return (
        <>
        <div className="stick top-0 z-50 py-3 backdrop-blur-lg border-b">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-center items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="" />
                       <span className="text-xl tracking-tight">Tanvi</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
           {navItems.map((item, index) => {
             <li key={{index}}>
                <a href={item.href}>{item.label}</a>
             </li>
           })}
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar