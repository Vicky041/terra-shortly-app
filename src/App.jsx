import Footer from "./components/Footer";
import CallToAction from "./ui/CallToAction";
import ShortenProvider from "./contexts/ShortenContext";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        URL Shortener
      </h1>
      <ShortenProvider>
        <CallToAction />
      </ShortenProvider>
      <Footer />
    </>
  );
}

export default App;
