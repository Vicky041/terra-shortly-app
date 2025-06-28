import Footer from "./components/Footer";
import CallToAction from "./ui/CallToAction";
import ShortenProvider from "./contexts/ShortenContext";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <Hero />
      <ShortenProvider>
        <CallToAction />
      </ShortenProvider>
      <Footer />
    </>
  );
}

export default App;
