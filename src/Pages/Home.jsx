import BgSlider from "../Components/BgSlider";
import Header from "../Components/Header";
import Steps from "../Components/Steps"
import Pricing from "../Components/Pricing";
import Testimonials from "../Components/Testimonials";
import TryNow  from "../Components/TryNow";

 const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-['Outfit']">
            {/* Hero Section */}
            <Header />


            {/* Sección de paso a paso | Step by step Section */}
            <Steps />

            {/* Sección de deslizado automático | Sider Section */}
            <BgSlider />

            {/* Sección de comprar créditos (solo visual por el momento)| buy credits Section (Front End only, for now)*/}
            <Pricing />

            {/*Testimonios|Testimonials*/}

            <Testimonials />

            {/*Probar ahora | Try Now*/}
            <TryNow />
        </div>
        
    )
}
export default Home;