import { useState } from "react";
import { assets } from "../assets/assets";
import{ Menu, X }from 'lucide-react'

const MenuBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-white px-8 py-4 flex justify-between items-center">
            {/*a la izquierda pongo el logo más el texto | Left side: logo + text*/}
            <div className="flex items-center space-x-2">
                <img src={assets.logo} alt="" className="h-8 w-8 object-contain cursor-pointer" />
                <span className="text-2xl font-semibold text-blue-400 cursor-ponter">
                    sin.<span className="text-red-500 cursor-pointer">fondo</span>
                </span>
            </div>

            {/*Del lado derecho pongo los action buttons | Right side, the action buttons */}
            <div className="hidden md:flex items-center space-x-4">
                <button className="text-gray-700 hover:text-blue-500 font-medium">
                    Iniciar Sesión
                </button>
                <button className="bg-gray-100 hover:bg-red-200 text-gray-700 font-medium px-4 py-2 rounded-full transition-all">Crear Cuenta</button>
            </div>
            {/*Hamburguesa mobile | Mobile hamburguer*/}
            <div className="flex md:hidden">
                <button onClick={ () => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28}/> : <Menu size={28} />}
                </button>
            </div>
        </nav>
    )
}
export default MenuBar;