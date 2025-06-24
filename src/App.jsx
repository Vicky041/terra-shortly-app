import CallToAction from "./ui/CallToAction";
import ShortenProvider from "./contexts/ShortenContext";

function App() {
  return (
    <>
      <h1>URL Shortener</h1>
      <ShortenProvider>
        <CallToAction />
      </ShortenProvider>
    </>
  );
}

export default App;
