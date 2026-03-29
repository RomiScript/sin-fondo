import { useState } from "react"
import { assets } from "../assets/assets"

const Header = () => {
    const [image, setImage] = useState(null)

    const handleUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImage(file)
            console.log("Imagen seleccionada:", file.name) // para verificar que llega
        }
    }

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="border-0 md:border-0 flex ml-5">
                <div className="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden">
                    <video src={assets.Banner} autoPlay loop muted className="w-full max-w-[350px] h-auto object-cover" />
                </div>
            </div>

            <div className="order-1 md:order-2">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6 leading-tight">
                    El quitafondos <span className="text-red-500">más veloz de condado.</span>
                </h1>
                <p className="text-gray-600 mb-8 text-base leading-relaxed">
                    ¡Transformá tus fotos con nuestro borrador de fondos!. Creá fondos transparentes para usar tus imágenes en el diseño que quieras. Probalo hoy y sumergite en la comodidad de tener lo que necesitás de forma fácil y rápida.
                </p>
                <div>
                    <input 
                        type="file" 
                        accept="image/*" 
                        id="upload1" 
                        hidden
                        onChange={handleUpload}
                    />
                    <label htmlFor="upload1"
                        className="cursor-pointer bg-black text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-transform hover:scale-105 text-base">
                        {image ? `📁 ${image.name}` : "Subir foto"}
                    </label>
                </div>
            </div>
        </div>
    )
}
export default Header;