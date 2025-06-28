import Header from "./components/Header";
import Footer from "./components/Footer";
import CallToAction from "./ui/CallToAction";
import ShortenProvider from "./contexts/ShortenContext";
import Hero from "./components/Hero";
import AdvanceStatistics from "./ui/AdvanceStatistics";

function App() {
  return (
    <>
      <Header/>
      <Hero />
      <ShortenProvider>
        <CallToAction />
      </ShortenProvider>
      <AdvanceStatistics />
      <Footer />
    </>
  );
}

export default App;
