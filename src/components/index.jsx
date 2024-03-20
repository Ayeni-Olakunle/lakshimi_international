import Menu from "./menu";
import HeroSection from "./herosection";
import AboutBrand from "./aboutBrand";
import SelectedProducts from "./SelectedProducts";
import Product from "./product";
import Tea from "./tea";
import Award from "./Awards";
import FAQ from "./faq";
import Extraordinary from "./extraordinary";
import Footer from "./footer";
function Index() {
  return <main>
    <Menu />
    <HeroSection />
    <AboutBrand />
    <SelectedProducts />
    <Product />
    <Tea />
    <Award />
    <FAQ />
    <Extraordinary />
    <Footer />
  </main>;
}

export default Index;
