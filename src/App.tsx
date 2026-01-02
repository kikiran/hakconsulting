import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { TeamSection } from "./components/TeamSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import ClientsSection from "./components/ClientsSection";


const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection  />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
