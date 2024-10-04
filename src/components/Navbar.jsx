import { NavLink } from "react-router-dom"
import logo from "../assets/logo.jpg"
import { navItems } from "../constants"
import { Menu, X } from "lucide-react"
import { useState } from "react"
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    return (
        <>
        <div className="stick top-0 z-50 py-3 backdrop-blur-lg ">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-6 w-6 mr-2" src={logo} alt="" />
                       <span className="text-xl tracking-tight">Journal</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
           {navItems.map((item, index) => (
             <li key={index}>
               <NavLink to={item.href}>
                                            {item.label}
                                        </NavLink>
             </li>
           ))}
                    </ul>
                    <div className="lg:hidden md-flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen?<X />:<Menu />}
                        </button>
                    </div>
                </div>
                <div className={`fixed right-0 z-20 bg-neutral-900 flex flex-col justify-center items-center lg-hidden w-full transform ${
                        mobileDrawerOpen
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-full opacity-0'
                    } transition-all duration-500 ease-in-out`}>

              
                {mobileDrawerOpen && (
                    <div 
                    className=""
                    
                    >
                        <ul>
                            {
                                navItems.map((item, index) => (
                                    <li key={index} className="py-4">
                                        <NavLink to={item.href} onClick={toggleNavbar}>
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )}
                  </div>
            </div>
        </div>
        </>
    )
}

export default Navbar