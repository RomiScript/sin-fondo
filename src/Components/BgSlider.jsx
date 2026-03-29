import { useState } from "react";
import { assets, categories } from "../assets/assets";


const BgSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [activeCategory, setActiveCategory] = useState("People");

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value);
    }

    return (
        <div className="mb-16 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Calidad Superior
            </h2>

            <div className="flex justify-center mb-10 flex-wrap">
                <div className="inline-flex gap-4 bg-gray-100 p-2 rounded-full flex-wrap justify-center">
                    {categories.map((category) => (
                        <button key={category}
                            className={`px-6 py-2 rounded-full font-medium ${activeCategory === category ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}
                            onClick={() => setActiveCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative w-full max-w-4xl overflow-hidden m-auto rounded-xl shadow-lg aspect-[4/3]">
                <img src={assets.people_org} alt="original"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                />
                <img src={assets.people} alt="sin fondo"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                />
                <input type="range"
    style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        width: '100%',
        zIndex: 10,
        WebkitAppearance: 'none',
        appearance: 'none',
        background: 'transparent',
        height: '100%',
        cursor: 'pointer'
    }}
    min={0} max={100}
    onChange={handleSliderChange}
    value={sliderPosition}
/>
            </div>
        </div>
    )
}
export default BgSlider;